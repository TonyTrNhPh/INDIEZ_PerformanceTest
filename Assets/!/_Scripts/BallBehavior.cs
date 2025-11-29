using System;
using UnityEngine;

public class BallBehavior : MonoBehaviour
{
    [SerializeField] private ParticleSystem streakEffect;
    [SerializeField] private float ballSpeed = 20f;
    [SerializeField] private Collider dunkTriggerBottom;
    [SerializeField] private Collider dunkTriggerTop;
    [SerializeField] private Collider basketRingTrigger;

    private bool isThrownAble = false;
    private bool isOnSlope = true;
    private bool isHitTopSensor = false;
    private bool isHitBottomSensor = false;
    private bool isHitBasketRing = false;
    private bool isScoring = false;

    private Rigidbody rb;

    private void Awake()
    {
        rb = GetComponent<Rigidbody>();
    }

    private void Update()
    {

    }

    private void FixedUpdate()
    {
        rb.AddForce(Vector3.up * -ballSpeed, ForceMode.Acceleration);
        if (!isThrownAble && isOnSlope)
        {
            rb.AddForce(Vector3.forward * -ballSpeed, ForceMode.Acceleration);

            if (rb.linearVelocity.z > 0)
            {
                rb.linearVelocity = new Vector3(rb.linearVelocity.x, rb.linearVelocity.y, 0);
            }
        }
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("ThrownAbleDetector"))
        {
            isThrownAble = true;
        }
        if (other == dunkTriggerBottom)
        {
            isHitBottomSensor = true;
        }
        if (other == dunkTriggerTop)
        {
            isHitTopSensor = true;
        }
        if (isHitBottomSensor && isHitTopSensor && isHitBasketRing)
        {
            if (!isScoring)
            {
                isScoring = true;
                GameManager.Instance.AddScore();
            }
        }
        if (isHitBottomSensor && isHitTopSensor && !isHitBasketRing)
        {
            if (!isScoring)
            {
                isScoring = true;
                GameManager.Instance.AddBonus();
            }
        }
    }

    private void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.CompareTag("Slope"))
        {
            isOnSlope = true;
            isHitTopSensor = false;
            isHitBottomSensor = false;
            isHitBasketRing = false;
            isScoring = false;
        }
        if (collision.gameObject.CompareTag("BasketRing"))
        {
            isHitBasketRing = true;
            Debug.Log("Hit Basket Ring Object");
        }
    }
    private void OnCollisionExit(Collision collision)
    {
        if (collision.gameObject.CompareTag("Slope"))
        {
            isOnSlope = false;
        }
    }
    public bool GetBallState() => isThrownAble;
    public bool SetBallState(bool state) => isThrownAble = state;
    public void PlayStreakEffect() => streakEffect.Play();
    public void StopStreakEffect() => streakEffect.Stop();
}
