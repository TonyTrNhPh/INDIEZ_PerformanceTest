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


    [Header("Triggers")]
    [SerializeField] private Collider dunkTriggerBottom;
    [SerializeField] private Collider dunkTriggerTop;
    [SerializeField] private Collider basketRingTrigger;


    [Header("UI Elements")]
    [SerializeField] private TextMeshProUGUI currentScoreText;
    [SerializeField] private TextMeshProUGUI highScoreText;
    [SerializeField] private TextMeshProUGUI timeText;
    [SerializeField] private TextMeshProUGUI quoteText;
    [SerializeField] private Button selectBallButton;
    [SerializeField] private Button confirmBallButton;
    [SerializeField] private Button backToGameButton;
    [SerializeField] private Button randomBallButton;
    [SerializeField] private Button moveBasketButton;
    [SerializeField] private Camera mainCamera;

    public static GameManager Instance { get; private set; }
    public GameState State { get; private set; }
    public static event Action<GameState> OnGameStateChanged;
    private int currentScore = 0;
    private int highScore = 0;
    private float timer = 0f;

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
            yield return new WaitForSeconds(1.2f);
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
        UpdateQuoteUI(quotesBonuses[UnityEngine.Random.Range(0, quotesBonuses.Length)]);
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
        Debug.Log("Game State: Starting");
        timer = timeLimit;
        currentScore = 0;
        UpdateScoreUI();
        UpdateQuoteUI("Get Ready!");
        timeText.text = FormattedTime();
    }
    private void HandleGamePlaying()
    {
        Debug.Log("Game State: Playing");
        StopAllCoroutines();
        timer = timeLimit;
        StartCoroutine(CountdownTimer());
    }
    private void HandleGameSelectBall()
    {
        Debug.Log("Game State: Select Ball");
    }
    private void HandleGameOver()
    {
        Debug.Log("Game State: Game Over");
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

}

public enum GameState
{
    Starting,
    Playing,
    SelectBall,
    GameOver,
}
