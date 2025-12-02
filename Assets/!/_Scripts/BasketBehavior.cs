using System.Collections;
using UnityEngine;

public class BasketBehavior : MonoBehaviour
{
    [SerializeField] private float basketMoveDistance = 2f;
    [SerializeField] private float basketMoveSpeed = 1f;
    private Rigidbody rb;
    private Vector3 centerPosition;
    private bool isMoving = false;
    private int currentDirection = 1; // 1 = right, -1 = left
    private Vector3 targetPosition;

    private void Awake()
    {
        rb = GetComponent<Rigidbody>();
        centerPosition = transform.position;
        targetPosition = centerPosition;
    }

    private void OnEnable()
    {
        GameManager.OnGameStateChanged += HandleGameStateChange;
    }

    private void OnDisable()
    {
        GameManager.OnGameStateChanged -= HandleGameStateChange;
    }

    private void Update()
    {
        if (isMoving)
        {
            MoveBasket();
        }
        else
        {
            if (Vector3.Distance(transform.position, centerPosition) > 0.01f)
            {
                targetPosition = centerPosition;
                MoveBasket();
            }
        }
    }

    private void HandleGameStateChange(GameState newState)
    {
        if (newState == GameState.SelectBall)
        {
            FreezeBasket(true);
        }
        else if (newState == GameState.Playing)
        {
            FreezeBasket(false);
        }
    }

    public void ToggleBasketMovement(bool enable)
    {
        if (enable)
        {
            isMoving = true;
            SetNextTarget();
        }
        else
        {
            targetPosition = centerPosition;
            MoveBasket();
            isMoving = false;
        }
    }

    private void MoveBasket()
    {
        float step = basketMoveSpeed * Time.deltaTime;
        transform.position = Vector3.MoveTowards(transform.position, targetPosition, step);
        if (Vector3.Distance(transform.position, targetPosition) < 0.01f)
        {
            transform.position = targetPosition;
            if (isMoving)
            {
                SetNextTarget();
            }

        }
    }

    private void SetNextTarget()
    {
        Vector3 currentPos = transform.position;
        if (Vector3.Distance(currentPos, centerPosition) < 0.1f)
        {
            targetPosition = centerPosition + (currentDirection == 1 ? Vector3.right : Vector3.left) * basketMoveDistance;
        }
        else
        {
            targetPosition = centerPosition;
            currentDirection *= -1;
        }
    }

    private void FreezeBasket(bool isFreeze)
    {
        if (rb != null)
        {
            if (isFreeze)
            {
                rb.constraints = RigidbodyConstraints.FreezeAll;
            }
            else
            {
                rb.constraints = RigidbodyConstraints.FreezeRotation |
                                 RigidbodyConstraints.FreezePositionY |
                                 RigidbodyConstraints.FreezePositionZ;
            }
        }
    }
}