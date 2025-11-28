using System;
using UnityEngine;

public class BallBehavior : MonoBehaviour
{
    [SerializeField] private ParticleSystem streakEffect;
    [SerializeField] private float ballSpeed = 20f;
    private bool isThrownAble = false;
    private bool isOnSlope = true;
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
    }

    private void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.CompareTag("Slope"))
        {
            isOnSlope = true;
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
