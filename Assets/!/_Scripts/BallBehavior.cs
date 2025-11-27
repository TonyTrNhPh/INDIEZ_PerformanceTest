using UnityEngine;

public class BallBehavior : MonoBehaviour
{   
    [SerializeField] private ParticleSystem streakEffect;
    private bool isThrownAble = false;

    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("ThrownAbleDetector"))
        {
            isThrownAble = true;
        }
    }

    public bool GetBallState() => isThrownAble;
    public bool SetBallState(bool state) => isThrownAble = state;
    public void PlayStreakEffect() => streakEffect.Play();
    public void StopStreakEffect() => streakEffect.Stop();
}
