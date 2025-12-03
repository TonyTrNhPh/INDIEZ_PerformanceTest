using UnityEngine;
#if LUNA_PLAYGROUND
using Luna.Unity;
#endif

public class LunaGameManager : MonoBehaviour
{
    [Header("Luna Settings")]
    [SerializeField] private bool enableLunaAnalytics = true;
    [SerializeField] private int maxParticles = 10;
    
    private static LunaGameManager instance;
    public static LunaGameManager Instance => instance;
    private GameState previousState = GameState.Starting;

    private void Awake()
    {
        if (instance == null)
        {
            instance = this;
            DontDestroyOnLoad(gameObject);
        }
        else
        {
            Destroy(gameObject);
            return;
        }

        InitializeLuna();
    }

    private void Start()
    {
        InstallFullGame();
        
        SubscribeToGameEvents();
        OptimizeForLuna();
    }

    private void OnDestroy()
    {
        UnsubscribeFromGameEvents();
    }

    private void InitializeLuna()
    {
        #if LUNA_PLAYGROUND
        Debug.Log("[Luna] Luna Playground detected - Running in Luna mode");
        QualitySettings.shadows = ShadowQuality.Disable;
        QualitySettings.shadowDistance = 0;
        QualitySettings.antiAliasing = 0;
        RenderSettings.ambientMode = UnityEngine.Rendering.AmbientMode.Flat;
        RenderSettings.ambientLight = new Color(0.4f, 0.4f, 0.4f); 
        
        Light[] lights = FindObjectsByType<Light>(FindObjectsSortMode.None);
        foreach (Light light in lights)
        {
            if (light.type == LightType.Directional)
            {
                light.intensity = Mathf.Max(light.intensity, 1.5f); 
            }
        }
        
        Debug.Log("[Luna] Quality settings optimized");
        #else
        Debug.Log("[Luna] Not running in Luna mode");
        #endif
    }

    private void InstallFullGame()
    {
        #if LUNA_PLAYGROUND
        Playable.InstallFullGame();
        Debug.Log("[Luna] Game marked as playable");
        #endif
    }

    private void SubscribeToGameEvents()
    {
        GameManager.OnGameStateChanged += OnGameStateChanged;
    }

    private void UnsubscribeFromGameEvents()
    {
        GameManager.OnGameStateChanged -= OnGameStateChanged;
    }

    private void OnGameStateChanged(GameState newState)
    {
        if (!enableLunaAnalytics) return;
        HandlePauseResume(previousState, newState);

        switch (newState)
        {
            case GameState.Starting:
                SendGameStarted();
                Debug.Log("[Luna] Game state: Starting");
                break;
            case GameState.Playing:
                Debug.Log("[Luna] Game state: Playing");
                break;
            case GameState.SelectBall:
                Debug.Log("[Luna] Game state: Select Ball (Paused)");
                break;
            case GameState.GameOver:
                SendGameEndedEvent();
                break;
        }

        previousState = newState;
    }

    private void HandlePauseResume(GameState oldState, GameState newState)
    {
        if (newState == GameState.SelectBall && oldState != GameState.SelectBall)
        {
            SendGamePaused();
        }
        
        if (oldState == GameState.SelectBall && newState == GameState.Playing)
        {
            SendGameResumed();
        }
    }

    private void OptimizeForLuna()
    {
        #if LUNA_PLAYGROUND
        ParticleSystem[] particles = FindObjectsByType<ParticleSystem>(FindObjectsSortMode.None);
        foreach (ParticleSystem ps in particles)
        {
            if (ps != null)
            {
                var main = ps.main;
                main.maxParticles = Mathf.Min(main.maxParticles, maxParticles);
            }
        }
        Debug.Log($"[Luna] Optimized {particles.Length} particle systems");

        Light[] lights = FindObjectsByType<Light>(FindObjectsSortMode.None);
        foreach (Light light in lights)
        {
            if (light.type == LightType.Directional)
            {
                light.shadows = LightShadows.None;
            }
            else if (light.type == LightType.Point || light.type == LightType.Spot)
            {
                light.enabled = false;
            }
        }
        Debug.Log($"[Luna] Optimized {lights.Length} lights");
        #endif
    }

    public void SendScoreEvent(int score)
    {
        Debug.Log($"[Luna] Score: {score}");
    }

    public void SendBonusEvent(int bonus)
    {
        Debug.Log($"[Luna] Bonus: {bonus}");
    }

    public void SendPerfectShotEvent()
    {
        Debug.Log("[Luna] Perfect shot!");
    }

    public void SendStreakEvent(int streak)
    {
        Debug.Log($"[Luna] Streak: {streak}");
    }

    public void SendBallSelectedEvent(int ballIndex)
    {   
        Debug.Log($"[Luna] Ball selected: {ballIndex}");
    }

    private void SendGameStarted()
    {
        #if LUNA_PLAYGROUND
        LifeCycle.GameStarted();
        Debug.Log("[Luna] LifeCycle.GameStarted() called");
        #endif
    }

    private void SendGamePaused()
    {
        #if LUNA_PLAYGROUND
        LifeCycle.GamePaused();
        Debug.Log("[Luna] LifeCycle.GamePaused() called");
        #endif
    }

    private void SendGameResumed()
    {
        #if LUNA_PLAYGROUND
        LifeCycle.GameResumed();
        Debug.Log("[Luna] LifeCycle.GameResumed() called");
        #endif
    }

    private void SendGameEndedEvent()
    {
        #if LUNA_PLAYGROUND
        LifeCycle.GameEnded();
        Debug.Log("[Luna] LifeCycle.GameEnded() called");
        #else
        Debug.Log("[Luna] Game state: Game Over (not in Luna mode)");
        #endif
    }

    public static bool IsLunaMode()
    {
        #if LUNA_PLAYGROUND
        return true;
        #else
        return false;
        #endif
    }
}