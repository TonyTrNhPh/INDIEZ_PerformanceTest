using System;
using System.Collections;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class GameManager : MonoBehaviour
{
    [Header("Game Settings")]
    [SerializeField] private float scoreBase = 1.0f;
    [SerializeField] private float scoreDunk = 2.0f;
    [SerializeField] private float timeLimit = 60.0f;
    [SerializeField] private float timeBonus = 10f;

    [Header("Quotes")]
    [SerializeField] private string[] quotesScoring;
    [SerializeField] private string[] quotesBonuses;
    [SerializeField] private InputManager inputManager;

    [Header("Ball skins system")]
    [SerializeField] private Material[] ballMaterials;
    [SerializeField] private GameObject[] ballInScene;


    [Header("Triggers")]
    [SerializeField] private Collider dunkTriggerBottom;
    [SerializeField] private Collider dunkTriggerTop;
    [SerializeField] private Collider basketRingTrigger;


    [Header("UI Elements")]
    [SerializeField] private TextMeshProUGUI currentScoreText;
    [SerializeField] private TextMeshProUGUI highScoreText;
    [SerializeField] private TextMeshProUGUI timeText;
    [SerializeField] private TextMeshProUGUI quoteText;
    [SerializeField] private GameObject playingOverlay;
    [SerializeField] private GameObject selectingBallOverlay;
    [SerializeField] private Button selectBallButton;
    [SerializeField] private Button confirmBallButton;
    [SerializeField] private Button backToGameButton;
    [SerializeField] private Button randomBallButton;
    [SerializeField] private Button moveBasketButton;
    [SerializeField] private Camera mainCamera;
    [SerializeField] private Camera selectionCamera;

    public static GameManager Instance { get; private set; }
    public GameState State { get; private set; }
    public static event Action<GameState> OnGameStateChanged;
    private int currentScore = 0;
    private int highScore = 0;
    private float timer = 0f;
    private int selectedBallIndex = 0;
    private int currentBallMaterialIndex = 0;

    private void Awake()
    {
        


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
    }

    private void Update()
    {

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
        int scoreToAdd = Mathf.RoundToInt(scoreBase);
        currentScore += scoreToAdd;
        if (currentScore > highScore)
        {
            highScore = currentScore;
        }
        UpdateScoreUI();
        UpdateQuoteUI(quotesScoring[UnityEngine.Random.Range(0, quotesScoring.Length)]);
    }

    public void AddBonus()
    {
        int bonusToAdd = Mathf.RoundToInt(scoreDunk);
        currentScore += bonusToAdd;
        if (currentScore > highScore)
        {
            highScore = currentScore;
        }
        timer += timeBonus; // Add time bonus
        UpdateScoreUI();
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
        StopAllCoroutines();
        timer = timeLimit;
        currentScore = 0;
        timeText.text = FormattedTime();
        UpdateScoreUI();
        UpdateQuoteUI("Get Ready!");
    }
    private void HandleGamePlaying()
    {
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
    }

    public GameState GetCurrentGameState()
    {
        return State;
    }

    public void OnMoveBasketButtonClick()
    {
        UpdateGameState(GameState.Starting);
    }

    public void OnSelectBallButtonClick()
    {
        UpdateGameState(GameState.SelectBall);
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
        selectedBallIndex = UnityEngine.Random.Range(0, ballMaterials.Length);
        ApplySelectedMaterial();
        UpdateGameState(GameState.Playing);
    }

    public Material[] GetSelectedBallMaterial() { return ballMaterials; }
    public GameObject[] GetBallInScene() { return ballInScene; }
    public int GetCurrentBallMaterialIndex()
    {
        return currentBallMaterialIndex;
    }

    public bool IsMobile()
    {
        return Application.isMobilePlatform;
    }
}

public enum GameState
{
    Starting,
    Playing,
    SelectBall,
    GameOver,
}
