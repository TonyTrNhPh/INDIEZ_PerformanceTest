using System.Runtime.InteropServices.WindowsRuntime;
using UnityEngine;

public class BallBehavior : MonoBehaviour
{   
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
}
