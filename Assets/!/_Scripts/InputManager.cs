using System.Collections;
using UnityEngine;
using UnityEngine.EventSystems;

public class InputManager : MonoBehaviour
{
    [Header("Cameras and Layers")]
    [SerializeField] private Camera mainCamera;
    [SerializeField] private LayerMask ballLayer;
    [SerializeField] private LayerMask ballSelectionLayer;
    [SerializeField] private GameObject ballSelectionParent;
    [SerializeField] private GameObject ballSelectionRing;

    [Header("Input Settings")]
    [SerializeField] private float minHoldTime = 0.15f;
    [SerializeField] private float maxFlickTime = 0.12f;
    [SerializeField] private float minHoldDistance = 0.1f;
    [SerializeField] private float minFlickDistance = 5.0f;
    [SerializeField] private float throwForce = 0.021f;
    [SerializeField] private float maxThrowHeight = 30f;
    [SerializeField] private float maxThrowDepth = -1f;
    [SerializeField] private float maxThrowHorizontal = 8f;
    [SerializeField] private float minThrowHorizontal = -8f;
    [SerializeField] private float minThrowSpeed = 2000f;
    [SerializeField] private float maxThrowSpeed = 5000f;
    [SerializeField] private float fixedZPosition = -23f;
    [SerializeField] private float selectionDragSpeed = 0.3f;
    private bool isHolding = false;
    private bool isFlicking = false;
    private bool isDraggingSelection = false;
    private GameObject currentBall;
    private Rigidbody rb;
    private Vector2 startInputPos;
    private float startInputTime;
    private Vector2 endInputPos;
    private float endInputTime;
    private Vector2 selectionDragStartPos;
    private int selectedBallIndex = 0;
    private Coroutine snapCoroutine;


    private void Start()
    {
        Cursor.visible = true;
        Cursor.lockState = CursorLockMode.Confined;
    }

    private void Update()
    {
        switch (GameManager.Instance.State)
        {
            case GameState.Starting:
                HandleStartingInput();
                break;
            case GameState.Playing:
                HandlePlayingInput();
                break;
            case GameState.SelectBall:
                HandleSelectingInput();
                break;
            case GameState.GameOver:
                break;
        }
        if (EventSystem.current.IsPointerOverGameObject()) return;

    }

    private bool InputDown()
    {
        if (GameManager.Instance.IsMobile())
            return Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began;
        return Input.GetMouseButtonDown(0);
    }

    private bool InputHold()
    {
        if (GameManager.Instance.IsMobile())
            return Input.touchCount > 0 &&
            (Input.GetTouch(0).phase == TouchPhase.Moved ||
            Input.GetTouch(0).phase == TouchPhase.Stationary);
        return Input.GetMouseButton(0);
    }

    private bool InputUp()
    {
        if (GameManager.Instance.IsMobile())
            return Input.touchCount > 0 &&
            (Input.GetTouch(0).phase == TouchPhase.Ended ||
            Input.GetTouch(0).phase == TouchPhase.Canceled);
        return Input.GetMouseButtonUp(0);
    }

    private Vector2 GetInputPosition()
    {
        if (GameManager.Instance.IsMobile())
            return Input.GetTouch(0).position;
        return Input.mousePosition;
    }

    private void HandleStartingInput()
    {
        currentBall = null;
        if (InputDown())
        {
            if (GetSelectedBall() != null)
            {
                GameManager.Instance.UpdateGameState(GameState.Playing);
            }
            PickUpBall();
        }
    }

    private void HandlePlayingInput()
    {
        if (InputDown())
        {
            PickUpBall();
            if (currentBall == null) return;
            StartInputTracking(GetInputPosition());
        }
        if (InputHold())
        {
            if (currentBall == null) return;
            UpdateInputTracking(GetInputPosition());
            DragBall();
        }
        if (InputUp())
        {
            if (currentBall == null) return;
            EndInputTracking(GetInputPosition());
            if (isHolding && !isFlicking)
            {
                ReleaseBall();
            }
            if (isFlicking && !isHolding)
            {
                ThrowBall();
            }
            currentBall = null;
        }
    }

    private void HandleSelectingInput()
    {

        if (InputDown())
        {
            StartSelectionDrag();
        }
        if (InputHold())
        {
            UpdateSelectionDrag();
        }
        if (InputUp())
        {
            EndSelectionDrag();
        }
    }

    private GameObject GetSelectedBall()
    {
        Ray ray = mainCamera.ScreenPointToRay(GetInputPosition());
        RaycastHit hit;

        if (Physics.Raycast(ray, out hit, Mathf.Infinity, ballLayer))
        {
            if (hit.collider.gameObject.GetComponent<BallBehavior>().GetBallState() == false)
            {
                return null;
            }
            return hit.collider.gameObject;
        }
        return null;
    }

    private void PickUpBall()
    {
        currentBall = GetSelectedBall();
        if (currentBall == null) return;

        isHolding = true;
        rb = currentBall.GetComponent<Rigidbody>();

        if (rb != null)
        {
            rb.useGravity = false;
            rb.freezeRotation = true;
            rb.linearVelocity = Vector3.zero;
            rb.angularVelocity = Vector3.zero;
        }
        if (GameManager.Instance.GetCurrentGameState() != GameState.Playing)
        {
            GameManager.Instance.UpdateGameState(GameState.Playing);
        }
    }

    private void DragBall()
    {
        if (currentBall == null) return;
        Vector3 mousePos = GetInputPosition();
        mousePos.z = mainCamera.WorldToScreenPoint(currentBall.transform.position).z;
        Vector3 worldPos = mainCamera.ScreenToWorldPoint(mousePos);
        currentBall.transform.position = new Vector3(worldPos.x, worldPos.y, fixedZPosition);
    }

    private void ReleaseBall()
    {
        if (currentBall == null) return;
        rb.freezeRotation = false;
        rb.useGravity = true;
        isHolding = false;
        isFlicking = false;
    }

    private void ThrowBall()
    {
        if (currentBall == null) return;
        rb.freezeRotation = false;
        rb.useGravity = true;
        rb.AddForce(CalculateThrowingTrajectory(), ForceMode.VelocityChange);
        currentBall.GetComponent<BallBehavior>().SetBallState(false);
        isFlicking = false;
        isHolding = false;
    }

    private void CalculateMovementType()
    {
        if (currentBall == null) return;
        float totalTime = endInputTime - startInputTime;
        float totalDistance = Vector2.Distance(endInputPos, startInputPos);
        if (totalTime <= maxFlickTime && totalDistance > minFlickDistance)
        {
            isHolding = false;
            isFlicking = true;
            return; // Flicking
        }
        isFlicking = false;
        isHolding = true;
    }

    private void StartInputTracking(Vector2 pos)
    {
        if (currentBall == null) return;
        startInputPos = pos;
        startInputTime = Time.time;
    }
    private void UpdateInputTracking(Vector2 pos)
    {
        if (currentBall == null) return;
        startInputPos = mainCamera.WorldToScreenPoint(currentBall.transform.position); ;
        startInputTime = Time.time;
        float timeHeld = Time.time - startInputTime;
        float distance = Vector2.Distance(pos, startInputPos);

        if (timeHeld > minHoldTime && distance > minHoldDistance)
        {
            isHolding = true;
        }
    }

    private void EndInputTracking(Vector2 pos)
    {
        if (currentBall == null) return;
        endInputTime = Time.time;
        endInputPos = pos;
        CalculateMovementType();
    }

    private Vector3 CalculateThrowingTrajectory()
    {
        Vector2 throwVector = endInputPos - startInputPos; // Get the 2D throw vector
        throwVector.y = Mathf.Clamp(throwVector.y, -maxThrowHeight, maxThrowHeight); // Clamp vertical limit
        throwVector.x = Mathf.Clamp(throwVector.x, minThrowHorizontal, maxThrowHorizontal); // Clamp horizontal limit

        float dragTime = endInputTime - startInputTime;
        if (dragTime <= 0) dragTime = 0.001f;

        float throwSpeed = throwVector.magnitude / dragTime;
        if (throwSpeed < minThrowSpeed) throwSpeed = minThrowSpeed;
        if (throwSpeed > maxThrowSpeed) throwSpeed = maxThrowSpeed;
        Vector3 throwDirection = new Vector3(throwVector.x, throwVector.y, maxThrowDepth - currentBall.transform.position.z).normalized;

        return throwDirection * throwForce * throwSpeed;
    }

    private void StartSelectionDrag()
    {
        ballSelectionRing.SetActive(false);
        isDraggingSelection = true;
        selectionDragStartPos = GetInputPosition();
    }

    private void UpdateSelectionDrag()
    {
        if (!isDraggingSelection) return;
        ballSelectionRing.SetActive(false);
        Vector2 currentMousePos = GetInputPosition();
        float dragDelta = currentMousePos.x - selectionDragStartPos.x;
        ballSelectionParent.transform.Rotate(0, -dragDelta * selectionDragSpeed, 0);
        selectionDragStartPos = currentMousePos;
    }

    private void EndSelectionDrag()
    {
        isDraggingSelection = false;
        SnapToBallPos();
    }
    private void SnapToBallPos()
    {
        if (snapCoroutine != null)
        {
            StopCoroutine(snapCoroutine);
        }
        snapCoroutine = StartCoroutine(SmoothSnapCoroutine());
    }

    private IEnumerator SmoothSnapCoroutine()
    {
        float currentY = ballSelectionParent.transform.rotation.eulerAngles.y;
        float division = 360f / GameManager.Instance.GetSelectedBallMaterial().Length;

        float targetY = Mathf.Round(currentY / division) * division;
        targetY = targetY % 360f;

        Quaternion startRotation = ballSelectionParent.transform.rotation;
        Quaternion targetRotation = Quaternion.Euler(0, targetY, 0);

        float t = 0f;

        while (t < 1f)
        {
            t += Time.deltaTime * 4f;
            ballSelectionParent.transform.rotation = Quaternion.Lerp(startRotation, targetRotation, t);
            yield return null;
        }

        ballSelectionParent.transform.rotation = targetRotation;

        int materialCount = GameManager.Instance.GetSelectedBallMaterial().Length;
        selectedBallIndex = Mathf.RoundToInt(targetY / division) % materialCount;
        selectedBallIndex = (materialCount - selectedBallIndex) % materialCount;

        ballSelectionRing.SetActive(true);
        snapCoroutine = null;
    }

    public void TurnToCurrentBallMaterial()
    {
        if (snapCoroutine != null)
        {
            StopCoroutine(snapCoroutine);
        }
        snapCoroutine = StartCoroutine(TurnToCurrentBallMaterialCoroutine());
    }

    public IEnumerator TurnToCurrentBallMaterialCoroutine()
    {
        int index = GameManager.Instance.GetCurrentBallMaterialIndex();
        index = (GameManager.Instance.GetSelectedBallMaterial().Length - index) % GameManager.Instance.GetSelectedBallMaterial().Length;
        float division = 360f / GameManager.Instance.GetSelectedBallMaterial().Length;

        Quaternion startRotation = ballSelectionParent.transform.rotation;
        Quaternion targetRotation = Quaternion.Euler(0, index * division, 0);

        float t = 0f;
        float duration = 0.5f;

        while (t < 1f)
        {
            t += Time.deltaTime / duration;
            ballSelectionParent.transform.rotation = Quaternion.Lerp(startRotation, targetRotation, t);
            yield return null;
        }

        ballSelectionParent.transform.rotation = targetRotation;
        selectedBallIndex = index;
        ballSelectionRing.SetActive(true);
    }

    public int GetSelectedBallIndex() => selectedBallIndex;

}
