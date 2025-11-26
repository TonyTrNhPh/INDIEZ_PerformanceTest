using UnityEditor.Callbacks;
using UnityEngine;

public class InputManager : MonoBehaviour
{
    [SerializeField] private Camera mainCamera;
    [SerializeField] private LayerMask ballLayer;
    [SerializeField] private float minHoldTime = 0.15f;
    [SerializeField] private float maxFlickTime = 0.12f;
    [SerializeField] private float minHoldDistance = 0.1f;
    [SerializeField] private float minFlickDistance = 1.0f;

    private bool isHolding = false;
    private bool isFlicking = false;
    private GameObject currentBall;
    private Rigidbody rb;
    private Vector2 startInputPos;
    private float startInputTime;
    private Vector2 endInputPos;
    private float endInputTime;

    private void Start()
    {

    }

    private void Update()
    {

        if (Input.GetMouseButtonDown(0))
        {
            PickUpBall();
        }
        if (Input.GetMouseButton(0))
        {
            UpdateInputTracking(Input.mousePosition);
            DragBall();
        }
        if (Input.GetMouseButtonUp(0))
        {
            EndInputTracking(Input.mousePosition);
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

    private GameObject GetSelectedBall()
    {
        Ray ray = mainCamera.ScreenPointToRay(Input.mousePosition);
        RaycastHit hit;

        if (Physics.Raycast(ray, out hit, Mathf.Infinity, ballLayer))
        {
            Debug.Log("Hit Ball: " + hit.collider.gameObject.name);
            return hit.collider.gameObject;
        }
        return null;
    }

    private void PickUpBall()
    {
        isHolding = true;
        currentBall = GetSelectedBall();
        if (currentBall != null)
        {
            rb = currentBall.GetComponent<Rigidbody>();
            rb.useGravity = false;
            rb.freezeRotation = true;
            rb.linearVelocity = Vector3.zero;
            rb.angularVelocity = Vector3.zero;
        }
    }

    private void DragBall()
    {
        if (currentBall == null) return;
        Vector3 mousePos = Input.mousePosition;
        mousePos.z = mainCamera.WorldToScreenPoint(currentBall.transform.position).z;
        Vector3 worldPos = mainCamera.ScreenToWorldPoint(mousePos);
        currentBall.transform.position = worldPos;
    }

    private void ReleaseBall()
    {
        if (currentBall == null) return;
        Debug.Log("Releasing Ball: " + currentBall.name);
        rb.freezeRotation = false;
        rb.useGravity = true;
        isHolding = false;
        isFlicking = false;
    }

    private void ThrowBall()
    {
        if (currentBall == null) return;
        Debug.Log("Throwing Ball: " + currentBall.name);
        rb.freezeRotation = false;
        rb.useGravity = true;
        isFlicking = false;
        isHolding = false;
    }

    private void CalculateMovementType()
    {
        float totalTime = endInputTime - startInputTime;
        float totalDistance = Vector2.Distance(endInputPos, startInputPos);
        if (totalTime <= maxFlickTime && totalDistance > minFlickDistance)
        {
            isHolding = false;
            isFlicking = true;
            Debug.Log("Flick detected.");
            return; // Flicking
        }
        isFlicking = false;
        isHolding = true;
        Debug.Log("Holding detected.");
    }

    private void UpdateInputTracking(Vector2 pos)
    {
        float timeHeld = Time.time - startInputTime;
        float distance = Vector2.Distance(pos, startInputPos);
        startInputPos = pos;
        startInputTime = Time.time;
        if (timeHeld > minHoldTime && distance > minHoldDistance)
        {
            isHolding = true;
            return;
        }
    }

    private void EndInputTracking(Vector2 pos)
    {
        endInputTime = Time.time;
        endInputPos = pos;
        CalculateMovementType();
    }

}
