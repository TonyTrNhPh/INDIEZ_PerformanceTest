using System;
using System.Collections;
using TMPro;
using UnityEngine;
using UnityEngine.UI;
#if LUNA_PLAYGROUND
using Luna.Playable;
#endif

public class GameManager : MonoBehaviour
{
    [Header("Game Settings")]
    [SerializeField] private float scoreBase = 1.0f;
    [SerializeField] private float scoreDunk = 2.0f;
    [SerializeField] private float timeLimit = 60.0f;
    [SerializeField] private float timeBonus = 10f;
    [SerializeField] private float targetFPS = 60f;
    [SerializeField] private int minStreakStart = 3;
    [SerializeField] private BasketBehavior basket;

    [Header("Quotes")]
    [SerializeField] private string[] quotesScoring;
    [SerializeField] private string[] quotesBonuses;
    [SerializeField] private InputManager inputManager;

    [Header("Ball skins system")]
    [SerializeField] private Material[] ballMaterials;
    [SerializeField] private GameObject[] ballInScene;

    [Header("Audio")]
    [SerializeField] private AudioClip[] basketAudio;
    [SerializeField] private AudioClip[] netAudio;
    [SerializeField] private AudioClip perfectAudio;
    [SerializeField] private AudioSource globalVolume;

    [Header("Particle")]
    [SerializeField] private ParticleSystem perfectEffect;
    [SerializeField] private ParticleSystem basketEffect;

    [Header("UI Elements")]
    [SerializeField] private TextMeshProUGUI currentScoreText;
    [SerializeField] private TextMeshProUGUI highScoreText;
    [SerializeField] private TextMeshProUGUI timeText;
    [SerializeField] private TextMeshProUGUI quoteText;
    [SerializeField] private GameObject playingOverlay;
    [SerializeField] private GameObject selectingBallOverlay;
    [SerializeField] private Button selectBallButton;
    [SerializeField] private Button moveBasketButton;
    [SerializeField] private Button restartButton;
    [SerializeField] private Button confirmBallButton;
    [SerializeField] private Button backToGameButton;
    [SerializeField] private Button randomBallButton;
    [SerializeField] private Camera mainCamera;
    [SerializeField] private Camera selectionCamera;
    [SerializeField] private Sprite uncheckedSprite;
    [SerializeField] private Sprite checkedSprite;
    [SerializeField] private GameObject rotateRing1;

    public static GameManager Instance { get; private set; }
    public GameState State { get; private set; }
    public static event Action<GameState> OnGameStateChanged;
    private int currentScore = 0;
    private int currentStreak = 0;
    private int highScore = 0;
    private float timer = 0f;
    private int selectedBallIndex = 0;
    private int currentBallMaterialIndex = 0;
    private bool isStreakActive = false;
    private bool isRandom = false;
    private bool isBasketMoved = false;

    private void Awake()
    {
        Application.targetFrameRate = Mathf.RoundToInt(targetFPS);
        if (Instance == null)
        {
            Instance = this;
            DontDestroyOnLoad(gameObject);
        }
        else
        {
            Destroy(gameObject);
        }
        Debug.Log("Is mobile runtime? " + Application.isMobilePlatform);
    }

    private void Start()
    {
        UpdateGameState(GameState.Starting);
        if (mainCamera != null && selectionCamera != null)
        {
            mainCamera.enabled = true;
            selectionCamera.enabled = false;
        }

        if (playingOverlay != null && selectingBallOverlay != null)
        {
            playingOverlay.SetActive(true);
            selectingBallOverlay.SetActive(false);
        }
#if LUNA_PLAYGROUND
        Playable.InstallFullGame();
        if (perfectEffect != null)
    {
        var main = perfectEffect.main;
        main.maxParticles = 20; // Reduce from default
    }
    if (basketEffect != null)
    {
        var main = basketEffect.main;
        main.maxParticles = 20;
    }
#endif
    }

    private void Update()
    {
        if (GetCurrentGameState() == GameState.Playing)
        {
            if (currentStreak >= minStreakStart)
            {
                isStreakActive = true;
            }
            else
            {
                isStreakActive = false;
            }
            PlayStreakEffects();
        }
        rotateRing1.transform.Rotate(Vector3.forward * -5f * Time.deltaTime);
    }
    private void UpdateScoreUI()
    {
        currentScoreText.text = currentScore.ToString("D4");
        highScoreText.text = highScore.ToString("D4");
    }
    private void UpdateQuoteUI(string message)
    {
        quoteText.text = message;
    }
    private IEnumerator CountdownTimer()
    {
        while (timer > 0)
        {
            yield return new WaitForSeconds(1.0f);
            timer -= 1f;
            timeText.text = FormattedTime();
        }
        timeText.text = "00:00";
        Debug.Log("Time's up!");
        UpdateGameState(GameState.GameOver);
    }

    private string FormattedTime()
    {
        int minutes = Mathf.FloorToInt(timer / 60);
        int seconds = Mathf.FloorToInt(timer % 60);
        return string.Format("{0:00}:{1:00}", minutes, seconds);
    }

    public void AddScore()
    {
        int scoreToAdd = 0;
        if (isStreakActive)
        {
            scoreBase = 2;
        }
        else
        {
            scoreBase = 1;
        }
        scoreToAdd = Mathf.RoundToInt(scoreBase);
        currentScore += scoreToAdd;
        if (currentScore > highScore)
        {
            highScore = currentScore;
        }
#if LUNA_PLAYGROUND
        Playable.CustomEvent("scored_gained", currentScore.ToString());
#endif
        UpdateScoreUI();
        currentStreak++;
        UpdateQuoteUI(quotesScoring[UnityEngine.Random.Range(0, quotesScoring.Length)]);
    }

    public void AddBonus()
    {
        int bonusToAdd = 0;
        if (isStreakActive)
        {
            scoreDunk = 4;
        }
        else
        {
            scoreDunk = 2;
        }
        bonusToAdd = Mathf.RoundToInt(scoreDunk);
        currentScore += bonusToAdd;
        if (currentScore > highScore)
        {
            highScore = currentScore;
        }
        timer += timeBonus; // Add time bonus
#if LUNA_PLAYGROUND
        Playable.CustomEvent("scored_gained", currentScore.ToString());
#endif
        UpdateScoreUI();
        currentStreak++;
        PlayPerfectParticleEffect();
        if (GetCurrentGameState() != GameState.GameOver)
        {
            UpdateQuoteUI(quotesBonuses[UnityEngine.Random.Range(0, quotesBonuses.Length)]);
        }
    }
    private void ApplySelectedMaterial()
    {
        Material selectedMaterial = ballMaterials[selectedBallIndex];
        currentBallMaterialIndex = selectedBallIndex; // Cache it

        foreach (GameObject ball in ballInScene)
        {
            if (ball != null)
            {
                Renderer renderer = ball.GetComponent<Renderer>();
                if (renderer != null)
                {
                    renderer.material = selectedMaterial; // Reuse reference
                }
            }
        }
    }

    private void ApplyRandomMaterial()
    {
        foreach (GameObject ball in ballInScene)
        {
            Material randomMaterial = ballMaterials[UnityEngine.Random.Range(0, ballMaterials.Length)];
            if (ball != null)
            {
                Renderer renderer = ball.GetComponent<Renderer>();
                if (renderer != null)
                {
                    renderer.material = randomMaterial; // Reuse reference
                }
            }
        }
    }

    public void UpdateGameState(GameState newState)
    {
        State = newState;
        switch (State)
        {
            case GameState.Starting:
                HandleGameStarting();
                break;
            case GameState.Playing:
                HandleGamePlaying();
                break;
            case GameState.SelectBall:
                HandleGameSelectBall();
                break;
            case GameState.GameOver:
                HandleGameOver();
                break;
            default:
                throw new ArgumentOutOfRangeException(nameof(newState), newState, null);
        }
        OnGameStateChanged?.Invoke(newState);
    }
    private void HandleGameStarting()
    {
        if (mainCamera != null && selectionCamera != null)
        {
            mainCamera.enabled = true;
            selectionCamera.enabled = false;
        }

        if (playingOverlay != null && selectingBallOverlay != null)
        {
            playingOverlay.SetActive(true);
            selectingBallOverlay.SetActive(false);
        }
        StopAllCoroutines();
        timer = timeLimit;
        currentScore = 0;
        currentStreak = 0;
        timeText.text = FormattedTime();
        UpdateScoreUI();
        UpdateQuoteUI("Get Ready!");
    }
    private void HandleGamePlaying()
    {
#if LUNA_PLAYGROUND
        Playable.CustomEvent("game_started");
#endif
        if (quoteText.text == "Get Ready!")
        {
            UpdateQuoteUI("Let's dunk!");
        }
        selectingBallOverlay.SetActive(false);
        playingOverlay.SetActive(true);
        selectionCamera.enabled = false;
        mainCamera.enabled = true;
        StopAllCoroutines();
        StartCoroutine(CountdownTimer());
    }
    private void HandleGameSelectBall()
    {
        if (inputManager != null)
        {
            inputManager.TurnToCurrentBallMaterial();
        }

        playingOverlay.SetActive(false);
        selectingBallOverlay.SetActive(true);
        StopAllCoroutines();
        selectionCamera.enabled = true;
        mainCamera.enabled = false;
    }
    private void HandleGameOver()
    {
        quoteText.text = "Game Over!";
        currentStreak = 0;
#if LUNA_PLAYGROUND
        LifeCycle.GameEnded();
#endif
        StopBasketParticleEffect();
    }

    public GameState GetCurrentGameState()
    {
        return State;
    }
    public void OnSelectBallButtonClick()
    {
        UpdateGameState(GameState.SelectBall);
    }
    public void OnMoveBasketButtonClick()
    {
        isBasketMoved = !isBasketMoved;
        ToggleSprite(moveBasketButton, isBasketMoved);
        if (basket != null)
        {
            basket.ToggleBasketMovement(isBasketMoved);
        }
    }
    public void OnRestartButtonClick()
    {
        UpdateGameState(GameState.Starting);
    }
    public void OnConfirmBallButtonClick()
    {
        selectedBallIndex = inputManager.GetSelectedBallIndex();
        ApplySelectedMaterial();
        UpdateGameState(GameState.Playing);
    }
    public void OnBackToGameButtonClick()
    {
        UpdateGameState(GameState.Playing);
    }
    public void OnRandomBallButtonClick()
    {
        ApplyRandomMaterial();
        isRandom = !isRandom;
        ToggleSprite(randomBallButton, isRandom);
        UpdateGameState(GameState.Playing);
    }

    public Material[] GetSelectedBallMaterial() => ballMaterials;
    public GameObject[] GetBallInScene() => ballInScene;
    public int GetCurrentBallMaterialIndex() => currentBallMaterialIndex;
    public bool IsMobile() => Application.isMobilePlatform;
    public AudioSource GetGlobalVolume() => globalVolume;
    public void PlayRandomBasketAudio()
    {
        if (basketAudio.Length > 0)
        {
            AudioClip clip = basketAudio[UnityEngine.Random.Range(0, basketAudio.Length)];
            globalVolume.PlayOneShot(clip);
        }
    }

    public void PlayRandomNetAudio()
    {
        if (netAudio.Length > 0)
        {
            AudioClip clip = netAudio[UnityEngine.Random.Range(0, netAudio.Length)];
            globalVolume.PlayOneShot(clip);
        }
    }

    public void PlayPerfectAudio()
    {
        if (perfectAudio != null)
        {
            globalVolume.PlayOneShot(perfectAudio);
        }
    }
    public void PlayPerfectParticleEffect()
    {
        if (perfectEffect != null)
        {
            perfectEffect.Play();
        }
    }

    public void PlayStreakEffects()
    {
        if (isStreakActive)
        {
            foreach (GameObject ball in ballInScene)
            {
                BallBehavior ballBehavior = ball.GetComponent<BallBehavior>();
                if (ballBehavior != null)
                {
                    ballBehavior.PlayBallEffect();
                }
            }
            PlayBasketParticleEffect();
        }
        else
        {
            foreach (GameObject ball in ballInScene)
            {
                BallBehavior ballBehavior = ball.GetComponent<BallBehavior>();
                if (ballBehavior != null)
                {
                    ballBehavior.StopBallEffect();
                }
            }
            StopBasketParticleEffect();
        }
    }
    public int ResetCurrentStreak() => currentStreak = 0;
    public void PlayBasketParticleEffect()
    {
        if (basketEffect != null)
        {
            basketEffect.Play();
        }
    }
    public void StopBasketParticleEffect()
    {
        if (basketEffect != null)
        {
            basketEffect.Stop();
        }
    }

    public void ToggleSprite(Button button, bool isChecked)
    {
        Image buttonImage = button.GetComponent<Image>();
        if (buttonImage != null)
        {
            buttonImage.sprite = isChecked ? checkedSprite : uncheckedSprite;
        }
    }
}

public enum GameState
{
    Starting,
    Playing,
    SelectBall,
    GameOver,
}
