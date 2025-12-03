if ( TRACE ) { TRACE( JSON.parse( '["BallBehavior#init","BallBehavior#Awake","BallBehavior#OnEnable","BallBehavior#OnDisable","BallBehavior#HandleGameStateChange","BallBehavior#FixedUpdate","BallBehavior#FreezeBall","BallBehavior#OnTriggerEnter","BallBehavior#OnCollisionEnter","BallBehavior#OnCollisionExit","BallBehavior#ResetOutBounds","BallBehavior#GetBallState","BallBehavior#SetBallState","BallBehavior#PlayBallEffect","BallBehavior#StopBallEffect","BasketBehavior#init","BasketBehavior#Awake","BasketBehavior#OnEnable","BasketBehavior#OnDisable","BasketBehavior#Update","BasketBehavior#HandleGameStateChange","BasketBehavior#ToggleBasketMovement","BasketBehavior#MoveBasket","BasketBehavior#SetNextTarget","BasketBehavior#FreezeBasket","GameManager#init","GameManager#Awake","GameManager#Start","GameManager#Update","GameManager#UpdateScoreUI","GameManager#UpdateQuoteUI","GameManager#CountdownTimer","GameManager#FormattedTime","GameManager#AddScore","GameManager#AddBonus","GameManager#ApplySelectedMaterial","GameManager#ApplyRandomMaterial","GameManager#UpdateGameState","GameManager#HandleGameStarting","GameManager#HandleGamePlaying","GameManager#HandleGameSelectBall","GameManager#HandleGameOver","GameManager#GetCurrentGameState","GameManager#OnSelectBallButtonClick","GameManager#OnMoveBasketButtonClick","GameManager#OnRestartButtonClick","GameManager#OnConfirmBallButtonClick","GameManager#OnBackToGameButtonClick","GameManager#OnRandomBallButtonClick","GameManager#GetSelectedBallMaterial","GameManager#GetBallInScene","GameManager#GetCurrentBallMaterialIndex","GameManager#IsMobile","GameManager#GetGlobalVolume","GameManager#PlayRandomBasketAudio","GameManager#PlayRandomNetAudio","GameManager#PlayPerfectAudio","GameManager#PlayPerfectParticleEffect","GameManager#PlayStreakEffects","GameManager#ResetCurrentStreak","GameManager#PlayBasketParticleEffect","GameManager#StopBasketParticleEffect","GameManager#ToggleSprite","InputManager#init","InputManager#Start","InputManager#Update","InputManager#InputDown","InputManager#InputHold","InputManager#InputUp","InputManager#GetInputPosition","InputManager#HandleStartingInput","InputManager#HandlePlayingInput","InputManager#HandleSelectingInput","InputManager#GetSelectedBall","InputManager#PickUpBall","InputManager#DragBall","InputManager#ReleaseBall","InputManager#ThrowBall","InputManager#CalculateMovementType","InputManager#StartInputTracking","InputManager#UpdateInputTracking","InputManager#EndInputTracking","InputManager#CalculateThrowingTrajectory","InputManager#StartSelectionDrag","InputManager#UpdateSelectionDrag","InputManager#EndSelectionDrag","InputManager#SnapToBallPos","InputManager#SmoothSnapCoroutine","InputManager#TurnToCurrentBallMaterial","InputManager#TurnToCurrentBallMaterialCoroutine","InputManager#GetSelectedBallIndex"]' ) ); }
/**
 * @version 1.0.9468.19923
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*BallBehavior start.*/
    Bridge.define("BallBehavior", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            ballEffect: null,
            ballSpeed: 0,
            dunkTriggerBottom: null,
            dunkTriggerTop: null,
            basketRingTrigger: null,
            isThrownAble: false,
            isOnSlope: false,
            isHitTopSensor: false,
            isHitBottomSensor: false,
            isHitBasketRing: false,
            isScoring: false,
            isAudioPlayed: false,
            storedVelocity: null,
            storedAngularVelocity: null,
            rb: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BallBehavior#init", this ); }

                this.storedVelocity = new UnityEngine.Vector3();
                this.storedAngularVelocity = new UnityEngine.Vector3();
                this.ballSpeed = 20.0;
                this.isThrownAble = false;
                this.isOnSlope = true;
                this.isHitTopSensor = false;
                this.isHitBottomSensor = false;
                this.isHitBasketRing = false;
                this.isScoring = false;
                this.isAudioPlayed = false;
            }
        },
        methods: {
            /*BallBehavior.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "BallBehavior#Awake", this ); }

                this.rb = this.GetComponent(UnityEngine.Rigidbody);
            },
            /*BallBehavior.Awake end.*/

            /*BallBehavior.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "BallBehavior#OnEnable", this ); }

                GameManager.addOnGameStateChanged(Bridge.fn.cacheBind(this, this.HandleGameStateChange));
            },
            /*BallBehavior.OnEnable end.*/

            /*BallBehavior.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "BallBehavior#OnDisable", this ); }

                GameManager.removeOnGameStateChanged(Bridge.fn.cacheBind(this, this.HandleGameStateChange));
            },
            /*BallBehavior.OnDisable end.*/

            /*BallBehavior.HandleGameStateChange start.*/
            HandleGameStateChange: function (newState) {
if ( TRACE ) { TRACE( "BallBehavior#HandleGameStateChange", this ); }

                if (newState === GameState.SelectBall) {
                    this.FreezeBall(true);
                } else if (newState === GameState.Playing) {
                    this.FreezeBall(false);
                }
            },
            /*BallBehavior.HandleGameStateChange end.*/

            /*BallBehavior.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "BallBehavior#FixedUpdate", this ); }

                this.rb.AddForce$1(pc.Vec3.UP.clone().clone().scale( -this.ballSpeed ), UnityEngine.ForceMode.Acceleration);
                if (!this.isThrownAble && this.isOnSlope) {
                    this.rb.AddForce$1(new pc.Vec3( 0, 0, 1 ).clone().scale( -this.ballSpeed ), UnityEngine.ForceMode.Acceleration);

                    if (this.rb.linearVelocity.z > 0) {
                        this.rb.linearVelocity = new pc.Vec3( this.rb.linearVelocity.x, this.rb.linearVelocity.y, 0 );
                    }
                }
                if (this.transform.position.y < -10) {
                    this.ResetOutBounds();
                }
            },
            /*BallBehavior.FixedUpdate end.*/

            /*BallBehavior.FreezeBall start.*/
            FreezeBall: function (isFreeze) {
if ( TRACE ) { TRACE( "BallBehavior#FreezeBall", this ); }

                if (UnityEngine.Component.op_Inequality(this.rb, null)) {
                    if (isFreeze) {
                        this.storedVelocity = this.rb.linearVelocity.$clone();
                        this.storedAngularVelocity = this.rb.angularVelocity.$clone();
                        this.rb.constraints = UnityEngine.RigidbodyConstraints.FreezeAll;
                    } else {
                        this.rb.constraints = UnityEngine.RigidbodyConstraints.None;
                        this.rb.linearVelocity = this.storedVelocity.$clone();
                        this.rb.angularVelocity = this.storedAngularVelocity.$clone();
                    }
                }
            },
            /*BallBehavior.FreezeBall end.*/

            /*BallBehavior.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "BallBehavior#OnTriggerEnter", this ); }

                if (other.CompareTag("ThrownAbleDetector")) {
                    this.isThrownAble = true;
                }
                if (UnityEngine.Component.op_Equality(other, this.dunkTriggerBottom)) {
                    this.isHitBottomSensor = true;
                }
                if (UnityEngine.Component.op_Equality(other, this.dunkTriggerTop)) {
                    this.isHitTopSensor = true;
                }
                if (other.CompareTag("MissDetector")) {
                    if (!this.isScoring && !this.isThrownAble) {
                        GameManager.Instance.ResetCurrentStreak();
                    }
                }
                if (this.isHitBottomSensor && this.isHitTopSensor && this.isHitBasketRing) {
                    if (!this.isScoring) {
                        this.isScoring = true;
                        GameManager.Instance.PlayRandomNetAudio();
                        GameManager.Instance.AddScore();
                    }
                }
                if (this.isHitBottomSensor && this.isHitTopSensor && !this.isHitBasketRing) {
                    if (!this.isScoring) {
                        this.isScoring = true;
                        GameManager.Instance.PlayPerfectAudio();
                        GameManager.Instance.PlayRandomNetAudio();
                        GameManager.Instance.AddBonus();
                    }
                }
            },
            /*BallBehavior.OnTriggerEnter end.*/

            /*BallBehavior.OnCollisionEnter start.*/
            OnCollisionEnter: function (collision) {
if ( TRACE ) { TRACE( "BallBehavior#OnCollisionEnter", this ); }

                if (collision.gameObject.CompareTag("Slope")) {
                    this.isOnSlope = true;
                    this.isHitTopSensor = false;
                    this.isHitBottomSensor = false;
                    this.isHitBasketRing = false;
                    this.isScoring = false;
                    this.isAudioPlayed = false;
                }
                if (collision.gameObject.CompareTag("BasketRing")) {
                    this.isHitBasketRing = true;
                    if (!this.isAudioPlayed) {
                        GameManager.Instance.PlayRandomBasketAudio();
                        this.isAudioPlayed = true;
                    }
                }
            },
            /*BallBehavior.OnCollisionEnter end.*/

            /*BallBehavior.OnCollisionExit start.*/
            OnCollisionExit: function (collision) {
if ( TRACE ) { TRACE( "BallBehavior#OnCollisionExit", this ); }

                if (collision.gameObject.CompareTag("Slope")) {
                    this.isOnSlope = false;
                    this.isAudioPlayed = false;
                }
            },
            /*BallBehavior.OnCollisionExit end.*/

            /*BallBehavior.ResetOutBounds start.*/
            ResetOutBounds: function () {
if ( TRACE ) { TRACE( "BallBehavior#ResetOutBounds", this ); }

                this.transform.position = new pc.Vec3( UnityEngine.Random.Range$1(-3.0, 3.0), 16, -22 );
            },
            /*BallBehavior.ResetOutBounds end.*/

            /*BallBehavior.GetBallState start.*/
            GetBallState: function () {
if ( TRACE ) { TRACE( "BallBehavior#GetBallState", this ); }

                return this.isThrownAble;
            },
            /*BallBehavior.GetBallState end.*/

            /*BallBehavior.SetBallState start.*/
            SetBallState: function (state) {
if ( TRACE ) { TRACE( "BallBehavior#SetBallState", this ); }

                return (this.isThrownAble = state);
            },
            /*BallBehavior.SetBallState end.*/

            /*BallBehavior.PlayBallEffect start.*/
            PlayBallEffect: function () {
if ( TRACE ) { TRACE( "BallBehavior#PlayBallEffect", this ); }

                this.ballEffect.Play();
            },
            /*BallBehavior.PlayBallEffect end.*/

            /*BallBehavior.StopBallEffect start.*/
            StopBallEffect: function () {
if ( TRACE ) { TRACE( "BallBehavior#StopBallEffect", this ); }

                this.ballEffect.Stop();
            },
            /*BallBehavior.StopBallEffect end.*/


        }
    });
    /*BallBehavior end.*/

    /*BasketBehavior start.*/
    Bridge.define("BasketBehavior", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            basketMoveDistance: 0,
            basketMoveSpeed: 0,
            rb: null,
            centerPosition: null,
            isMoving: false,
            currentDirection: 0,
            targetPosition: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BasketBehavior#init", this ); }

                this.centerPosition = new UnityEngine.Vector3();
                this.targetPosition = new UnityEngine.Vector3();
                this.basketMoveDistance = 2.0;
                this.basketMoveSpeed = 1.0;
                this.isMoving = false;
                this.currentDirection = 1;
            }
        },
        methods: {
            /*BasketBehavior.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "BasketBehavior#Awake", this ); }

                this.rb = this.GetComponent(UnityEngine.Rigidbody);
                this.centerPosition = this.transform.position.$clone();
                this.targetPosition = this.centerPosition.$clone();
            },
            /*BasketBehavior.Awake end.*/

            /*BasketBehavior.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "BasketBehavior#OnEnable", this ); }

                GameManager.addOnGameStateChanged(Bridge.fn.cacheBind(this, this.HandleGameStateChange));
            },
            /*BasketBehavior.OnEnable end.*/

            /*BasketBehavior.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "BasketBehavior#OnDisable", this ); }

                GameManager.removeOnGameStateChanged(Bridge.fn.cacheBind(this, this.HandleGameStateChange));
            },
            /*BasketBehavior.OnDisable end.*/

            /*BasketBehavior.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BasketBehavior#Update", this ); }

                if (this.isMoving) {
                    this.MoveBasket();
                } else {
                    if (pc.Vec3.distance( this.transform.position, this.centerPosition ) > 0.01) {
                        this.targetPosition = this.centerPosition.$clone();
                        this.MoveBasket();
                    }
                }
            },
            /*BasketBehavior.Update end.*/

            /*BasketBehavior.HandleGameStateChange start.*/
            HandleGameStateChange: function (newState) {
if ( TRACE ) { TRACE( "BasketBehavior#HandleGameStateChange", this ); }

                if (newState === GameState.SelectBall) {
                    this.FreezeBasket(true);
                } else if (newState === GameState.Playing) {
                    this.FreezeBasket(false);
                }
            },
            /*BasketBehavior.HandleGameStateChange end.*/

            /*BasketBehavior.ToggleBasketMovement start.*/
            ToggleBasketMovement: function (enable) {
if ( TRACE ) { TRACE( "BasketBehavior#ToggleBasketMovement", this ); }

                if (enable) {
                    this.isMoving = true;
                    this.SetNextTarget();
                } else {
                    this.targetPosition = this.centerPosition.$clone();
                    this.MoveBasket();
                    this.isMoving = false;
                }
            },
            /*BasketBehavior.ToggleBasketMovement end.*/

            /*BasketBehavior.MoveBasket start.*/
            MoveBasket: function () {
if ( TRACE ) { TRACE( "BasketBehavior#MoveBasket", this ); }

                var step = this.basketMoveSpeed * UnityEngine.Time.deltaTime;
                this.transform.position = pc.Vec3.moveTowards( this.transform.position, this.targetPosition, step );
                if (pc.Vec3.distance( this.transform.position, this.targetPosition ) < 0.01) {
                    this.transform.position = this.targetPosition.$clone();
                    if (this.isMoving) {
                        this.SetNextTarget();
                    }

                }
            },
            /*BasketBehavior.MoveBasket end.*/

            /*BasketBehavior.SetNextTarget start.*/
            SetNextTarget: function () {
if ( TRACE ) { TRACE( "BasketBehavior#SetNextTarget", this ); }

                var currentPos = this.transform.position.$clone();
                if (pc.Vec3.distance( currentPos, this.centerPosition ) < 0.1) {
                    this.targetPosition = this.centerPosition.$clone().add( (this.currentDirection === 1 ? pc.Vec3.RIGHT.clone() : pc.Vec3.LEFT.clone()).clone().scale( this.basketMoveDistance ) );
                } else {
                    this.targetPosition = this.centerPosition.$clone();
                    this.currentDirection = Bridge.Int.mul(this.currentDirection, (-1));
                }
            },
            /*BasketBehavior.SetNextTarget end.*/

            /*BasketBehavior.FreezeBasket start.*/
            FreezeBasket: function (isFreeze) {
if ( TRACE ) { TRACE( "BasketBehavior#FreezeBasket", this ); }

                if (UnityEngine.Component.op_Inequality(this.rb, null)) {
                    if (isFreeze) {
                        this.rb.constraints = UnityEngine.RigidbodyConstraints.FreezeAll;
                    } else {
                        this.rb.constraints = 124;
                    }
                }
            },
            /*BasketBehavior.FreezeBasket end.*/


        }
    });
    /*BasketBehavior end.*/

    /*GameManager start.*/
    Bridge.define("GameManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            },
            events: {
                OnGameStateChanged: null
            }
        },
        fields: {
            scoreBase: 0,
            scoreDunk: 0,
            timeLimit: 0,
            timeBonus: 0,
            targetFPS: 0,
            minStreakStart: 0,
            basket: null,
            quotesScoring: null,
            quotesBonuses: null,
            inputManager: null,
            ballMaterials: null,
            ballInScene: null,
            basketAudio: null,
            netAudio: null,
            perfectAudio: null,
            globalVolume: null,
            perfectEffect: null,
            basketEffect: null,
            currentScoreText: null,
            highScoreText: null,
            timeText: null,
            quoteText: null,
            playingOverlay: null,
            selectingBallOverlay: null,
            selectBallButton: null,
            moveBasketButton: null,
            restartButton: null,
            confirmBallButton: null,
            backToGameButton: null,
            randomBallButton: null,
            mainCamera: null,
            selectionCamera: null,
            uncheckedSprite: null,
            checkedSprite: null,
            rotateRing1: null,
            State: 0,
            currentScore: 0,
            currentStreak: 0,
            highScore: 0,
            timer: 0,
            selectedBallIndex: 0,
            currentBallMaterialIndex: 0,
            isStreakActive: false,
            isRandom: false,
            isBasketMoved: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameManager#init", this ); }

                this.scoreBase = 1.0;
                this.scoreDunk = 2.0;
                this.timeLimit = 60.0;
                this.timeBonus = 10.0;
                this.targetFPS = 60.0;
                this.minStreakStart = 3;
                this.currentScore = 0;
                this.currentStreak = 0;
                this.highScore = 0;
                this.timer = 0.0;
                this.selectedBallIndex = 0;
                this.currentBallMaterialIndex = 0;
                this.isStreakActive = false;
                this.isRandom = false;
                this.isBasketMoved = false;
            }
        },
        methods: {
            /*GameManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "GameManager#Awake", this ); }

                UnityEngine.Application.targetFrameRate = Math.round(this.targetFPS);
                if (UnityEngine.MonoBehaviour.op_Equality(GameManager.Instance, null)) {
                    GameManager.Instance = this;
                    UnityEngine.Object.DontDestroyOnLoad(this.gameObject);
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
                UnityEngine.Debug.Log$1("Is mobile runtime? " + System.Boolean.toString(UnityEngine.Application.isMobilePlatform));
            },
            /*GameManager.Awake end.*/

            /*GameManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GameManager#Start", this ); }

                this.UpdateGameState(GameState.Starting);
            },
            /*GameManager.Start end.*/

            /*GameManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "GameManager#Update", this ); }

                if (this.GetCurrentGameState() === GameState.Playing) {
                    if (this.currentStreak >= this.minStreakStart) {
                        this.isStreakActive = true;
                    } else {
                        this.isStreakActive = false;
                    }
                    this.PlayStreakEffects();
                }
                this.rotateRing1.transform.Rotate$2(new pc.Vec3( 0, 0, 1 ).clone().scale( -5.0 ).clone().scale( UnityEngine.Time.deltaTime ));
            },
            /*GameManager.Update end.*/

            /*GameManager.UpdateScoreUI start.*/
            UpdateScoreUI: function () {
if ( TRACE ) { TRACE( "GameManager#UpdateScoreUI", this ); }

                this.currentScoreText.text = System.Int32.format(this.currentScore, "D4");
                this.highScoreText.text = System.Int32.format(this.highScore, "D4");
            },
            /*GameManager.UpdateScoreUI end.*/

            /*GameManager.UpdateQuoteUI start.*/
            UpdateQuoteUI: function (message) {
if ( TRACE ) { TRACE( "GameManager#UpdateQuoteUI", this ); }

                this.quoteText.text = message;
            },
            /*GameManager.UpdateQuoteUI end.*/

            /*GameManager.CountdownTimer start.*/
            CountdownTimer: function () {
if ( TRACE ) { TRACE( "GameManager#CountdownTimer", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( this.timer > 0 ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 1: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this.timer -= 1.0;
                                        this.timeText.text = this.FormattedTime();

                                        $step = 0;
                                        continue;
                                }
                                case 3: {
                                    this.timeText.text = "00:00";
                                        UnityEngine.Debug.Log$1("Time's up!");
                                        this.UpdateGameState(GameState.GameOver);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameManager.CountdownTimer end.*/

            /*GameManager.FormattedTime start.*/
            FormattedTime: function () {
if ( TRACE ) { TRACE( "GameManager#FormattedTime", this ); }

                var minutes = Math.floor(this.timer / 60);
                var seconds = Math.floor(this.timer % 60);
                return System.String.format("{0:00}:{1:00}", Bridge.box(minutes, System.Int32), Bridge.box(seconds, System.Int32));
            },
            /*GameManager.FormattedTime end.*/

            /*GameManager.AddScore start.*/
            AddScore: function () {
if ( TRACE ) { TRACE( "GameManager#AddScore", this ); }

                var scoreToAdd = 0;
                if (this.isStreakActive) {
                    this.scoreBase = 2;
                } else {
                    this.scoreBase = 1;
                }
                scoreToAdd = Math.round(this.scoreBase);
                this.currentScore = (this.currentScore + scoreToAdd) | 0;
                if (this.currentScore > this.highScore) {
                    this.highScore = this.currentScore;
                }
                this.UpdateScoreUI();
                this.currentStreak = (this.currentStreak + 1) | 0;
                this.UpdateQuoteUI(this.quotesScoring[UnityEngine.Random.Range(0, this.quotesScoring.length)]);
            },
            /*GameManager.AddScore end.*/

            /*GameManager.AddBonus start.*/
            AddBonus: function () {
if ( TRACE ) { TRACE( "GameManager#AddBonus", this ); }

                var bonusToAdd = 0;
                if (this.isStreakActive) {
                    this.scoreDunk = 4;
                } else {
                    this.scoreDunk = 2;
                }
                bonusToAdd = Math.round(this.scoreDunk);
                this.currentScore = (this.currentScore + bonusToAdd) | 0;
                if (this.currentScore > this.highScore) {
                    this.highScore = this.currentScore;
                }
                this.timer += this.timeBonus; // Add time bonus
                this.UpdateScoreUI();
                this.currentStreak = (this.currentStreak + 1) | 0;
                this.PlayPerfectParticleEffect();
                if (this.GetCurrentGameState() !== GameState.GameOver) {
                    this.UpdateQuoteUI(this.quotesBonuses[UnityEngine.Random.Range(0, this.quotesBonuses.length)]);
                }
            },
            /*GameManager.AddBonus end.*/

            /*GameManager.ApplySelectedMaterial start.*/
            ApplySelectedMaterial: function () {
if ( TRACE ) { TRACE( "GameManager#ApplySelectedMaterial", this ); }

                var $t;
                var selectedMaterial = this.ballMaterials[this.selectedBallIndex];
                this.currentBallMaterialIndex = this.selectedBallIndex; // Cache it

                $t = Bridge.getEnumerator(this.ballInScene);
                try {
                    while ($t.moveNext()) {
                        var ball = $t.Current;
                        if (UnityEngine.GameObject.op_Inequality(ball, null)) {
                            var renderer = ball.GetComponent(UnityEngine.Renderer);
                            if (UnityEngine.Component.op_Inequality(renderer, null)) {
                                renderer.material = selectedMaterial; // Reuse reference
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*GameManager.ApplySelectedMaterial end.*/

            /*GameManager.ApplyRandomMaterial start.*/
            ApplyRandomMaterial: function () {
if ( TRACE ) { TRACE( "GameManager#ApplyRandomMaterial", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.ballInScene);
                try {
                    while ($t.moveNext()) {
                        var ball = $t.Current;
                        var randomMaterial = this.ballMaterials[UnityEngine.Random.Range(0, this.ballMaterials.length)];
                        if (UnityEngine.GameObject.op_Inequality(ball, null)) {
                            var renderer = ball.GetComponent(UnityEngine.Renderer);
                            if (UnityEngine.Component.op_Inequality(renderer, null)) {
                                renderer.material = randomMaterial; // Reuse reference
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*GameManager.ApplyRandomMaterial end.*/

            /*GameManager.UpdateGameState start.*/
            UpdateGameState: function (newState) {
if ( TRACE ) { TRACE( "GameManager#UpdateGameState", this ); }

                this.State = newState;
                switch (this.State) {
                    case GameState.Starting: 
                        this.HandleGameStarting();
                        break;
                    case GameState.Playing: 
                        this.HandleGamePlaying();
                        break;
                    case GameState.SelectBall: 
                        this.HandleGameSelectBall();
                        break;
                    case GameState.GameOver: 
                        this.HandleGameOver();
                        break;
                    default: 
                        throw new System.ArgumentOutOfRangeException.$ctor3("newState", Bridge.box(newState, GameState, System.Enum.toStringFn(GameState)), null);
                }
                !Bridge.staticEquals(GameManager.OnGameStateChanged, null) ? GameManager.OnGameStateChanged(newState) : null;
            },
            /*GameManager.UpdateGameState end.*/

            /*GameManager.HandleGameStarting start.*/
            HandleGameStarting: function () {
if ( TRACE ) { TRACE( "GameManager#HandleGameStarting", this ); }

                this.StopAllCoroutines();
                this.timer = this.timeLimit;
                this.currentScore = 0;
                this.currentStreak = 0;
                this.timeText.text = this.FormattedTime();
                this.UpdateScoreUI();
                this.UpdateQuoteUI("Get Ready!");
            },
            /*GameManager.HandleGameStarting end.*/

            /*GameManager.HandleGamePlaying start.*/
            HandleGamePlaying: function () {
if ( TRACE ) { TRACE( "GameManager#HandleGamePlaying", this ); }

                if (Bridge.referenceEquals(this.quoteText.text, "Get Ready!")) {
                    this.UpdateQuoteUI("Let's dunk!");
                }
                this.selectingBallOverlay.SetActive(false);
                this.playingOverlay.SetActive(true);
                this.selectionCamera.enabled = false;
                this.mainCamera.enabled = true;
                this.StopAllCoroutines();
                this.StartCoroutine$1(this.CountdownTimer());
            },
            /*GameManager.HandleGamePlaying end.*/

            /*GameManager.HandleGameSelectBall start.*/
            HandleGameSelectBall: function () {
if ( TRACE ) { TRACE( "GameManager#HandleGameSelectBall", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.inputManager, null)) {
                    this.inputManager.TurnToCurrentBallMaterial();
                }

                this.playingOverlay.SetActive(false);
                this.selectingBallOverlay.SetActive(true);
                this.StopAllCoroutines();
                this.selectionCamera.enabled = true;
                this.mainCamera.enabled = false;
            },
            /*GameManager.HandleGameSelectBall end.*/

            /*GameManager.HandleGameOver start.*/
            HandleGameOver: function () {
if ( TRACE ) { TRACE( "GameManager#HandleGameOver", this ); }

                this.quoteText.text = "Game Over!";
                this.currentStreak = 0;
                this.StopBasketParticleEffect();
            },
            /*GameManager.HandleGameOver end.*/

            /*GameManager.GetCurrentGameState start.*/
            GetCurrentGameState: function () {
if ( TRACE ) { TRACE( "GameManager#GetCurrentGameState", this ); }

                return this.State;
            },
            /*GameManager.GetCurrentGameState end.*/

            /*GameManager.OnSelectBallButtonClick start.*/
            OnSelectBallButtonClick: function () {
if ( TRACE ) { TRACE( "GameManager#OnSelectBallButtonClick", this ); }

                this.UpdateGameState(GameState.SelectBall);
            },
            /*GameManager.OnSelectBallButtonClick end.*/

            /*GameManager.OnMoveBasketButtonClick start.*/
            OnMoveBasketButtonClick: function () {
if ( TRACE ) { TRACE( "GameManager#OnMoveBasketButtonClick", this ); }

                this.isBasketMoved = !this.isBasketMoved;
                this.ToggleSprite(this.moveBasketButton, this.isBasketMoved);
                if (UnityEngine.MonoBehaviour.op_Inequality(this.basket, null)) {
                    this.basket.ToggleBasketMovement(this.isBasketMoved);
                }
            },
            /*GameManager.OnMoveBasketButtonClick end.*/

            /*GameManager.OnRestartButtonClick start.*/
            OnRestartButtonClick: function () {
if ( TRACE ) { TRACE( "GameManager#OnRestartButtonClick", this ); }

                this.UpdateGameState(GameState.Starting);
            },
            /*GameManager.OnRestartButtonClick end.*/

            /*GameManager.OnConfirmBallButtonClick start.*/
            OnConfirmBallButtonClick: function () {
if ( TRACE ) { TRACE( "GameManager#OnConfirmBallButtonClick", this ); }

                this.selectedBallIndex = this.inputManager.GetSelectedBallIndex();
                this.ApplySelectedMaterial();
                this.UpdateGameState(GameState.Playing);
            },
            /*GameManager.OnConfirmBallButtonClick end.*/

            /*GameManager.OnBackToGameButtonClick start.*/
            OnBackToGameButtonClick: function () {
if ( TRACE ) { TRACE( "GameManager#OnBackToGameButtonClick", this ); }

                this.UpdateGameState(GameState.Playing);
            },
            /*GameManager.OnBackToGameButtonClick end.*/

            /*GameManager.OnRandomBallButtonClick start.*/
            OnRandomBallButtonClick: function () {
if ( TRACE ) { TRACE( "GameManager#OnRandomBallButtonClick", this ); }

                this.ApplyRandomMaterial();
                this.isRandom = !this.isRandom;
                this.ToggleSprite(this.randomBallButton, this.isRandom);
                this.UpdateGameState(GameState.Playing);
            },
            /*GameManager.OnRandomBallButtonClick end.*/

            /*GameManager.GetSelectedBallMaterial start.*/
            GetSelectedBallMaterial: function () {
if ( TRACE ) { TRACE( "GameManager#GetSelectedBallMaterial", this ); }

                return this.ballMaterials;
            },
            /*GameManager.GetSelectedBallMaterial end.*/

            /*GameManager.GetBallInScene start.*/
            GetBallInScene: function () {
if ( TRACE ) { TRACE( "GameManager#GetBallInScene", this ); }

                return this.ballInScene;
            },
            /*GameManager.GetBallInScene end.*/

            /*GameManager.GetCurrentBallMaterialIndex start.*/
            GetCurrentBallMaterialIndex: function () {
if ( TRACE ) { TRACE( "GameManager#GetCurrentBallMaterialIndex", this ); }

                return this.currentBallMaterialIndex;
            },
            /*GameManager.GetCurrentBallMaterialIndex end.*/

            /*GameManager.IsMobile start.*/
            IsMobile: function () {
if ( TRACE ) { TRACE( "GameManager#IsMobile", this ); }

                return UnityEngine.Application.isMobilePlatform;
            },
            /*GameManager.IsMobile end.*/

            /*GameManager.GetGlobalVolume start.*/
            GetGlobalVolume: function () {
if ( TRACE ) { TRACE( "GameManager#GetGlobalVolume", this ); }

                return this.globalVolume;
            },
            /*GameManager.GetGlobalVolume end.*/

            /*GameManager.PlayRandomBasketAudio start.*/
            PlayRandomBasketAudio: function () {
if ( TRACE ) { TRACE( "GameManager#PlayRandomBasketAudio", this ); }

                if (this.basketAudio.length > 0) {
                    var clip = this.basketAudio[UnityEngine.Random.Range(0, this.basketAudio.length)];
                    this.globalVolume.PlayOneShot(clip);
                }
            },
            /*GameManager.PlayRandomBasketAudio end.*/

            /*GameManager.PlayRandomNetAudio start.*/
            PlayRandomNetAudio: function () {
if ( TRACE ) { TRACE( "GameManager#PlayRandomNetAudio", this ); }

                if (this.netAudio.length > 0) {
                    var clip = this.netAudio[UnityEngine.Random.Range(0, this.netAudio.length)];
                    this.globalVolume.PlayOneShot(clip);
                }
            },
            /*GameManager.PlayRandomNetAudio end.*/

            /*GameManager.PlayPerfectAudio start.*/
            PlayPerfectAudio: function () {
if ( TRACE ) { TRACE( "GameManager#PlayPerfectAudio", this ); }

                if (this.perfectAudio != null) {
                    this.globalVolume.PlayOneShot(this.perfectAudio);
                }
            },
            /*GameManager.PlayPerfectAudio end.*/

            /*GameManager.PlayPerfectParticleEffect start.*/
            PlayPerfectParticleEffect: function () {
if ( TRACE ) { TRACE( "GameManager#PlayPerfectParticleEffect", this ); }

                if (UnityEngine.Component.op_Inequality(this.perfectEffect, null)) {
                    this.perfectEffect.Play();
                }
            },
            /*GameManager.PlayPerfectParticleEffect end.*/

            /*GameManager.PlayStreakEffects start.*/
            PlayStreakEffects: function () {
if ( TRACE ) { TRACE( "GameManager#PlayStreakEffects", this ); }

                var $t, $t1;
                if (this.isStreakActive) {
                    $t = Bridge.getEnumerator(this.ballInScene);
                    try {
                        while ($t.moveNext()) {
                            var ball = $t.Current;
                            var ballBehavior = ball.GetComponent(BallBehavior);
                            if (UnityEngine.MonoBehaviour.op_Inequality(ballBehavior, null)) {
                                ballBehavior.PlayBallEffect();
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    this.PlayBasketParticleEffect();
                } else {
                    $t1 = Bridge.getEnumerator(this.ballInScene);
                    try {
                        while ($t1.moveNext()) {
                            var ball1 = $t1.Current;
                            var ballBehavior1 = ball1.GetComponent(BallBehavior);
                            if (UnityEngine.MonoBehaviour.op_Inequality(ballBehavior1, null)) {
                                ballBehavior1.StopBallEffect();
                            }
                        }
                    } finally {
                        if (Bridge.is($t1, System.IDisposable)) {
                            $t1.System$IDisposable$Dispose();
                        }
                    }
                    this.StopBasketParticleEffect();
                }
            },
            /*GameManager.PlayStreakEffects end.*/

            /*GameManager.ResetCurrentStreak start.*/
            ResetCurrentStreak: function () {
if ( TRACE ) { TRACE( "GameManager#ResetCurrentStreak", this ); }

                return (this.currentStreak = 0);
            },
            /*GameManager.ResetCurrentStreak end.*/

            /*GameManager.PlayBasketParticleEffect start.*/
            PlayBasketParticleEffect: function () {
if ( TRACE ) { TRACE( "GameManager#PlayBasketParticleEffect", this ); }

                if (UnityEngine.Component.op_Inequality(this.basketEffect, null)) {
                    this.basketEffect.Play();
                }
            },
            /*GameManager.PlayBasketParticleEffect end.*/

            /*GameManager.StopBasketParticleEffect start.*/
            StopBasketParticleEffect: function () {
if ( TRACE ) { TRACE( "GameManager#StopBasketParticleEffect", this ); }

                if (UnityEngine.Component.op_Inequality(this.basketEffect, null)) {
                    this.basketEffect.Stop();
                }
            },
            /*GameManager.StopBasketParticleEffect end.*/

            /*GameManager.ToggleSprite start.*/
            ToggleSprite: function (button, isChecked) {
if ( TRACE ) { TRACE( "GameManager#ToggleSprite", this ); }

                var buttonImage = button.GetComponent(UnityEngine.UI.Image);
                if (UnityEngine.MonoBehaviour.op_Inequality(buttonImage, null)) {
                    buttonImage.sprite = isChecked ? this.checkedSprite : this.uncheckedSprite;
                }
            },
            /*GameManager.ToggleSprite end.*/


        }
    });
    /*GameManager end.*/

    /*GameState start.*/
    Bridge.define("GameState", {
        $kind: 6,
        statics: {
            fields: {
                Starting: 0,
                Playing: 1,
                SelectBall: 2,
                GameOver: 3
            }
        }
    });
    /*GameState end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*InputManager start.*/
    Bridge.define("InputManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            mainCamera: null,
            ballLayer: null,
            ballSelectionLayer: null,
            ballSelectionParent: null,
            ballSelectionRing: null,
            minHoldTime: 0,
            maxFlickTime: 0,
            minHoldDistance: 0,
            minFlickDistance: 0,
            throwForce: 0,
            maxThrowHeight: 0,
            maxThrowDepth: 0,
            maxThrowHorizontal: 0,
            minThrowHorizontal: 0,
            minThrowSpeed: 0,
            maxThrowSpeed: 0,
            throwSensitivity: 0,
            fixedZPosition: 0,
            selectionDragSpeed: 0,
            isHolding: false,
            isFlicking: false,
            isDraggingSelection: false,
            currentBall: null,
            rb: null,
            startInputPos: null,
            startInputTime: 0,
            endInputPos: null,
            endInputTime: 0,
            selectionDragStartPos: null,
            selectedBallIndex: 0,
            snapCoroutine: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "InputManager#init", this ); }

                this.ballLayer = new UnityEngine.LayerMask();
                this.ballSelectionLayer = new UnityEngine.LayerMask();
                this.startInputPos = new UnityEngine.Vector2();
                this.endInputPos = new UnityEngine.Vector2();
                this.selectionDragStartPos = new UnityEngine.Vector2();
                this.minHoldTime = 0.15;
                this.maxFlickTime = 0.12;
                this.minHoldDistance = 5.0;
                this.minFlickDistance = 50.0;
                this.throwForce = 0.021;
                this.maxThrowHeight = 30.0;
                this.maxThrowDepth = -1.0;
                this.maxThrowHorizontal = 8.0;
                this.minThrowHorizontal = -8.0;
                this.minThrowSpeed = 2000.0;
                this.maxThrowSpeed = 5000.0;
                this.throwSensitivity = 1.0;
                this.fixedZPosition = -23.0;
                this.selectionDragSpeed = 0.3;
                this.isHolding = false;
                this.isFlicking = false;
                this.isDraggingSelection = false;
                this.selectedBallIndex = 0;
            }
        },
        methods: {
            /*InputManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "InputManager#Start", this ); }


            },
            /*InputManager.Start end.*/

            /*InputManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "InputManager#Update", this ); }

                switch (GameManager.Instance.State) {
                    case GameState.Starting: 
                        this.HandleStartingInput();
                        break;
                    case GameState.Playing: 
                        this.HandlePlayingInput();
                        break;
                    case GameState.SelectBall: 
                        this.HandleSelectingInput();
                        break;
                    case GameState.GameOver: 
                        break;
                }
                if (UnityEngine.EventSystems.EventSystem.current.IsPointerOverGameObject()) {
                    return;
                }

            },
            /*InputManager.Update end.*/

            /*InputManager.InputDown start.*/
            InputDown: function () {
if ( TRACE ) { TRACE( "InputManager#InputDown", this ); }

                if (GameManager.Instance.IsMobile()) {
                    return UnityEngine.Input.touchCount > 0 && UnityEngine.Input.GetTouch(0).phase === UnityEngine.TouchPhase.Began;
                }
                return UnityEngine.Input.GetMouseButtonDown(0);
            },
            /*InputManager.InputDown end.*/

            /*InputManager.InputHold start.*/
            InputHold: function () {
if ( TRACE ) { TRACE( "InputManager#InputHold", this ); }

                if (GameManager.Instance.IsMobile()) {
                    return UnityEngine.Input.touchCount > 0 && (UnityEngine.Input.GetTouch(0).phase === UnityEngine.TouchPhase.Moved || UnityEngine.Input.GetTouch(0).phase === UnityEngine.TouchPhase.Stationary);
                }
                return UnityEngine.Input.GetMouseButton(0);
            },
            /*InputManager.InputHold end.*/

            /*InputManager.InputUp start.*/
            InputUp: function () {
if ( TRACE ) { TRACE( "InputManager#InputUp", this ); }

                if (GameManager.Instance.IsMobile()) {
                    return UnityEngine.Input.touchCount > 0 && (UnityEngine.Input.GetTouch(0).phase === UnityEngine.TouchPhase.Ended || UnityEngine.Input.GetTouch(0).phase === UnityEngine.TouchPhase.Canceled);
                }
                return UnityEngine.Input.GetMouseButtonUp(0);
            },
            /*InputManager.InputUp end.*/

            /*InputManager.GetInputPosition start.*/
            GetInputPosition: function () {
if ( TRACE ) { TRACE( "InputManager#GetInputPosition", this ); }

                if (GameManager.Instance.IsMobile()) {
                    return UnityEngine.Input.GetTouch(0).position.$clone();
                }
                return UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition.$clone());
            },
            /*InputManager.GetInputPosition end.*/

            /*InputManager.HandleStartingInput start.*/
            HandleStartingInput: function () {
if ( TRACE ) { TRACE( "InputManager#HandleStartingInput", this ); }

                this.currentBall = null;
                if (this.InputDown()) {
                    if (UnityEngine.GameObject.op_Inequality(this.GetSelectedBall(), null)) {
                        GameManager.Instance.UpdateGameState(GameState.Playing);
                    }
                    this.PickUpBall();
                }
            },
            /*InputManager.HandleStartingInput end.*/

            /*InputManager.HandlePlayingInput start.*/
            HandlePlayingInput: function () {
if ( TRACE ) { TRACE( "InputManager#HandlePlayingInput", this ); }

                if (this.InputDown()) {
                    this.PickUpBall();
                    if (UnityEngine.GameObject.op_Equality(this.currentBall, null)) {
                        return;
                    }
                    this.StartInputTracking(this.GetInputPosition());
                }
                if (this.InputHold()) {
                    if (UnityEngine.GameObject.op_Equality(this.currentBall, null)) {
                        return;
                    }
                    this.UpdateInputTracking(this.GetInputPosition());
                    this.DragBall();
                }
                if (this.InputUp()) {
                    if (UnityEngine.GameObject.op_Equality(this.currentBall, null)) {
                        return;
                    }
                    this.EndInputTracking(this.GetInputPosition());
                    if (this.isHolding && !this.isFlicking) {
                        this.ReleaseBall();
                    }
                    if (this.isFlicking && !this.isHolding) {
                        this.ThrowBall();
                    }
                    this.currentBall = null;
                }
            },
            /*InputManager.HandlePlayingInput end.*/

            /*InputManager.HandleSelectingInput start.*/
            HandleSelectingInput: function () {
if ( TRACE ) { TRACE( "InputManager#HandleSelectingInput", this ); }


                if (this.InputDown()) {
                    this.StartSelectionDrag();
                }
                if (this.InputHold()) {
                    this.UpdateSelectionDrag();
                }
                if (this.InputUp()) {
                    this.EndSelectionDrag();
                }
            },
            /*InputManager.HandleSelectingInput end.*/

            /*InputManager.GetSelectedBall start.*/
            GetSelectedBall: function () {
if ( TRACE ) { TRACE( "InputManager#GetSelectedBall", this ); }

                var ray = this.mainCamera.ScreenPointToRay(UnityEngine.Vector3.FromVector2(this.GetInputPosition()));
                var hit = { v : new UnityEngine.RaycastHit() };

                if (UnityEngine.Physics.Raycast$1(ray, hit, window.Infinity, UnityEngine.LayerMask.op_Implicit(this.ballLayer.$clone()))) {
                    if (hit.v.collider.gameObject.GetComponent(BallBehavior).GetBallState() === false) {
                        return null;
                    }
                    return hit.v.collider.gameObject;
                }
                return null;
            },
            /*InputManager.GetSelectedBall end.*/

            /*InputManager.PickUpBall start.*/
            PickUpBall: function () {
if ( TRACE ) { TRACE( "InputManager#PickUpBall", this ); }

                this.currentBall = this.GetSelectedBall();
                if (UnityEngine.GameObject.op_Equality(this.currentBall, null)) {
                    return;
                }

                UnityEngine.Cursor.visible = false;
                UnityEngine.Cursor.lockState = UnityEngine.CursorLockMode.Confined;
                this.isHolding = true;
                this.rb = this.currentBall.GetComponent(UnityEngine.Rigidbody);

                if (UnityEngine.Component.op_Inequality(this.rb, null)) {
                    this.rb.useGravity = false;
                    this.rb.freezeRotation = true;
                    this.rb.linearVelocity = pc.Vec3.ZERO.clone();
                    this.rb.angularVelocity = pc.Vec3.ZERO.clone();
                }
                if (GameManager.Instance.GetCurrentGameState() !== GameState.Playing) {
                    GameManager.Instance.UpdateGameState(GameState.Playing);
                }
            },
            /*InputManager.PickUpBall end.*/

            /*InputManager.DragBall start.*/
            DragBall: function () {
if ( TRACE ) { TRACE( "InputManager#DragBall", this ); }

                if (UnityEngine.GameObject.op_Equality(this.currentBall, null)) {
                    return;
                }
                if (UnityEngine.Component.op_Inequality(this.rb, null)) {
                    this.rb.useGravity = false;
                    this.rb.freezeRotation = true;
                    this.rb.linearVelocity = pc.Vec3.ZERO.clone();
                    this.rb.angularVelocity = pc.Vec3.ZERO.clone();
                }
                var mousePos = UnityEngine.Vector3.FromVector2(this.GetInputPosition());
                mousePos.z = this.mainCamera.WorldToScreenPoint(this.currentBall.transform.position).z;
                var worldPos = this.mainCamera.ScreenToWorldPoint(mousePos);
                this.currentBall.transform.position = new pc.Vec3( worldPos.x, worldPos.y, this.fixedZPosition );
            },
            /*InputManager.DragBall end.*/

            /*InputManager.ReleaseBall start.*/
            ReleaseBall: function () {
if ( TRACE ) { TRACE( "InputManager#ReleaseBall", this ); }

                if (UnityEngine.GameObject.op_Equality(this.currentBall, null)) {
                    return;
                }
                this.rb.freezeRotation = false;
                this.rb.useGravity = true;
                UnityEngine.Cursor.visible = true;
                UnityEngine.Cursor.lockState = UnityEngine.CursorLockMode.None;
                this.isHolding = false;
                this.isFlicking = false;
            },
            /*InputManager.ReleaseBall end.*/

            /*InputManager.ThrowBall start.*/
            ThrowBall: function () {
if ( TRACE ) { TRACE( "InputManager#ThrowBall", this ); }

                if (UnityEngine.GameObject.op_Equality(this.currentBall, null)) {
                    return;
                }
                this.rb.freezeRotation = false;
                this.rb.useGravity = true;
                this.rb.AddForce$1(this.CalculateThrowingTrajectory(), UnityEngine.ForceMode.VelocityChange);
                this.currentBall.GetComponent(BallBehavior).SetBallState(false);
                UnityEngine.Cursor.visible = true;
                UnityEngine.Cursor.lockState = UnityEngine.CursorLockMode.None;
                this.isFlicking = false;
                this.isHolding = false;
            },
            /*InputManager.ThrowBall end.*/

            /*InputManager.CalculateMovementType start.*/
            CalculateMovementType: function () {
if ( TRACE ) { TRACE( "InputManager#CalculateMovementType", this ); }

                if (UnityEngine.GameObject.op_Equality(this.currentBall, null)) {
                    return;
                }
                var totalTime = this.endInputTime - this.startInputTime;
                var totalDistance = this.endInputPos.$clone().sub( this.startInputPos ).length();
                if (totalTime <= this.maxFlickTime && totalDistance > this.minFlickDistance) {
                    this.isHolding = false;
                    this.isFlicking = true;
                    return; // Flicking
                }
                this.isFlicking = false;
                this.isHolding = true;
            },
            /*InputManager.CalculateMovementType end.*/

            /*InputManager.StartInputTracking start.*/
            StartInputTracking: function (pos) {
if ( TRACE ) { TRACE( "InputManager#StartInputTracking", this ); }

                if (UnityEngine.GameObject.op_Equality(this.currentBall, null)) {
                    return;
                }
                this.startInputPos = pos.$clone();
                this.startInputTime = UnityEngine.Time.time;
            },
            /*InputManager.StartInputTracking end.*/

            /*InputManager.UpdateInputTracking start.*/
            UpdateInputTracking: function (pos) {
if ( TRACE ) { TRACE( "InputManager#UpdateInputTracking", this ); }

                if (UnityEngine.GameObject.op_Equality(this.currentBall, null)) {
                    return;
                }
                this.startInputPos = UnityEngine.Vector2.FromVector3(this.mainCamera.WorldToScreenPoint(this.currentBall.transform.position));
                ;
                this.startInputTime = UnityEngine.Time.time;
                var timeHeld = UnityEngine.Time.time - this.startInputTime;
                var distance = pos.$clone().sub( this.startInputPos ).length();

                if (timeHeld > this.minHoldTime && distance > this.minHoldDistance) {
                    this.isHolding = true;
                }
            },
            /*InputManager.UpdateInputTracking end.*/

            /*InputManager.EndInputTracking start.*/
            EndInputTracking: function (pos) {
if ( TRACE ) { TRACE( "InputManager#EndInputTracking", this ); }

                if (UnityEngine.GameObject.op_Equality(this.currentBall, null)) {
                    return;
                }
                this.endInputTime = UnityEngine.Time.time;
                this.endInputPos = pos.$clone();
                this.CalculateMovementType();
            },
            /*InputManager.EndInputTracking end.*/

            /*InputManager.CalculateThrowingTrajectory start.*/
            CalculateThrowingTrajectory: function () {
if ( TRACE ) { TRACE( "InputManager#CalculateThrowingTrajectory", this ); }

                var throwVector = this.endInputPos.$clone().sub( this.startInputPos ); // Get the 2D throw vector
                throwVector.y = Math.max(-this.maxThrowHeight, Math.min(throwVector.y, this.maxThrowHeight)); // Clamp vertical limit
                throwVector.x = Math.max(this.minThrowHorizontal, Math.min(throwVector.x, this.maxThrowHorizontal)); // Clamp horizontal limit
                var dragTime = this.endInputTime - this.startInputTime;
                if (dragTime <= 0) {
                    dragTime = 0.001;
                }

                var throwSpeed = throwVector.length() / dragTime;
                if (throwSpeed < this.minThrowSpeed) {
                    throwSpeed = this.minThrowSpeed;
                }
                if (throwSpeed > this.maxThrowSpeed) {
                    throwSpeed = this.maxThrowSpeed;
                }

                var throwDirection = new pc.Vec3( throwVector.x * this.throwSensitivity, throwVector.y, this.maxThrowDepth - this.currentBall.transform.position.z ).clone().normalize().$clone();
                return throwDirection.$clone().clone().scale( this.throwForce ).clone().scale( throwSpeed );
            },
            /*InputManager.CalculateThrowingTrajectory end.*/

            /*InputManager.StartSelectionDrag start.*/
            StartSelectionDrag: function () {
if ( TRACE ) { TRACE( "InputManager#StartSelectionDrag", this ); }

                this.ballSelectionRing.SetActive(false);
                this.isDraggingSelection = true;
                this.selectionDragStartPos = this.GetInputPosition();
            },
            /*InputManager.StartSelectionDrag end.*/

            /*InputManager.UpdateSelectionDrag start.*/
            UpdateSelectionDrag: function () {
if ( TRACE ) { TRACE( "InputManager#UpdateSelectionDrag", this ); }

                if (!this.isDraggingSelection) {
                    return;
                }
                this.ballSelectionRing.SetActive(false);
                var currentMousePos = this.GetInputPosition();
                var dragDelta = currentMousePos.x - this.selectionDragStartPos.x;
                this.ballSelectionParent.transform.Rotate(0, -dragDelta * this.selectionDragSpeed, 0);
                this.selectionDragStartPos = currentMousePos.$clone();
            },
            /*InputManager.UpdateSelectionDrag end.*/

            /*InputManager.EndSelectionDrag start.*/
            EndSelectionDrag: function () {
if ( TRACE ) { TRACE( "InputManager#EndSelectionDrag", this ); }

                this.isDraggingSelection = false;
                this.SnapToBallPos();
            },
            /*InputManager.EndSelectionDrag end.*/

            /*InputManager.SnapToBallPos start.*/
            SnapToBallPos: function () {
if ( TRACE ) { TRACE( "InputManager#SnapToBallPos", this ); }

                if (this.snapCoroutine != null) {
                    this.StopCoroutine$2(this.snapCoroutine);
                }
                this.snapCoroutine = this.StartCoroutine$1(this.SmoothSnapCoroutine());
            },
            /*InputManager.SnapToBallPos end.*/

            /*InputManager.SmoothSnapCoroutine start.*/
            SmoothSnapCoroutine: function () {
if ( TRACE ) { TRACE( "InputManager#SmoothSnapCoroutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    currentY,
                    division,
                    targetY,
                    startRotation,
                    targetRotation,
                    t,
                    materialCount,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    currentY = this.ballSelectionParent.transform.rotation.getPositiveEulerAngles().y;
                                        division = 360.0 / GameManager.Instance.GetSelectedBallMaterial().length;

                                        targetY = Math.round(currentY / division) * division;
                                        targetY = targetY % 360.0;

                                        startRotation = this.ballSelectionParent.transform.rotation.$clone();
                                        targetRotation = new pc.Quat().setFromEulerAngles_Unity( 0, targetY, 0 );

                                        t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < 1.0 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime * 4.0;
                                        this.ballSelectionParent.transform.rotation = new pc.Quat().lerpUnclamped( startRotation, targetRotation, pc.math.clamp( t, 0, 1 ) );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.ballSelectionParent.transform.rotation = targetRotation.$clone();

                                        materialCount = GameManager.Instance.GetSelectedBallMaterial().length;
                                        this.selectedBallIndex = Math.round(targetY / division) % materialCount;
                                        this.selectedBallIndex = (((materialCount - this.selectedBallIndex) | 0)) % materialCount;

                                        this.ballSelectionRing.SetActive(true);
                                        this.snapCoroutine = null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*InputManager.SmoothSnapCoroutine end.*/

            /*InputManager.TurnToCurrentBallMaterial start.*/
            TurnToCurrentBallMaterial: function () {
if ( TRACE ) { TRACE( "InputManager#TurnToCurrentBallMaterial", this ); }

                if (this.snapCoroutine != null) {
                    this.StopCoroutine$2(this.snapCoroutine);
                }
                this.snapCoroutine = this.StartCoroutine$1(this.TurnToCurrentBallMaterialCoroutine());
            },
            /*InputManager.TurnToCurrentBallMaterial end.*/

            /*InputManager.TurnToCurrentBallMaterialCoroutine start.*/
            TurnToCurrentBallMaterialCoroutine: function () {
if ( TRACE ) { TRACE( "InputManager#TurnToCurrentBallMaterialCoroutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    index,
                    division,
                    startRotation,
                    targetRotation,
                    t,
                    duration,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    index = GameManager.Instance.GetCurrentBallMaterialIndex();
                                        index = (((GameManager.Instance.GetSelectedBallMaterial().length - index) | 0)) % GameManager.Instance.GetSelectedBallMaterial().length;
                                        division = 360.0 / GameManager.Instance.GetSelectedBallMaterial().length;

                                        startRotation = this.ballSelectionParent.transform.rotation.$clone();
                                        targetRotation = new pc.Quat().setFromEulerAngles_Unity( 0, index * division, 0 );

                                        t = 0.0;
                                        duration = 0.5;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < 1.0 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime / duration;
                                        this.ballSelectionParent.transform.rotation = new pc.Quat().lerpUnclamped( startRotation, targetRotation, pc.math.clamp( t, 0, 1 ) );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.ballSelectionParent.transform.rotation = targetRotation.$clone();
                                        this.selectedBallIndex = index;
                                        this.ballSelectionRing.SetActive(true);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*InputManager.TurnToCurrentBallMaterialCoroutine end.*/

            /*InputManager.GetSelectedBallIndex start.*/
            GetSelectedBallIndex: function () {
if ( TRACE ) { TRACE( "InputManager#GetSelectedBallIndex", this ); }

                return this.selectedBallIndex;
            },
            /*InputManager.GetSelectedBallIndex end.*/


        }
    });
    /*InputManager end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","System.Collections","UnityEngine.UI","TMPro"];

    /*BallBehavior start.*/
    $m("BallBehavior", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"FreezeBall","t":8,"pi":[{"n":"isFreeze","pt":$n[0].Boolean,"ps":0}],"sn":"FreezeBall","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"GetBallState","t":8,"sn":"GetBallState","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"HandleGameStateChange","t":8,"pi":[{"n":"newState","pt":GameState,"ps":0}],"sn":"HandleGameStateChange","rt":$n[0].Void,"p":[GameState]},{"a":1,"n":"OnCollisionEnter","t":8,"pi":[{"n":"collision","pt":$n[1].Collision,"ps":0}],"sn":"OnCollisionEnter","rt":$n[0].Void,"p":[$n[1].Collision]},{"a":1,"n":"OnCollisionExit","t":8,"pi":[{"n":"collision","pt":$n[1].Collision,"ps":0}],"sn":"OnCollisionExit","rt":$n[0].Void,"p":[$n[1].Collision]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":2,"n":"PlayBallEffect","t":8,"sn":"PlayBallEffect","rt":$n[0].Void},{"a":1,"n":"ResetOutBounds","t":8,"sn":"ResetOutBounds","rt":$n[0].Void},{"a":2,"n":"SetBallState","t":8,"pi":[{"n":"state","pt":$n[0].Boolean,"ps":0}],"sn":"SetBallState","rt":$n[0].Boolean,"p":[$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"StopBallEffect","t":8,"sn":"StopBallEffect","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ballEffect","t":4,"rt":$n[1].ParticleSystem,"sn":"ballEffect"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ballSpeed","t":4,"rt":$n[0].Single,"sn":"ballSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"basketRingTrigger","t":4,"rt":$n[1].Collider,"sn":"basketRingTrigger"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"dunkTriggerBottom","t":4,"rt":$n[1].Collider,"sn":"dunkTriggerBottom"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"dunkTriggerTop","t":4,"rt":$n[1].Collider,"sn":"dunkTriggerTop"},{"a":1,"n":"isAudioPlayed","t":4,"rt":$n[0].Boolean,"sn":"isAudioPlayed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isHitBasketRing","t":4,"rt":$n[0].Boolean,"sn":"isHitBasketRing","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isHitBottomSensor","t":4,"rt":$n[0].Boolean,"sn":"isHitBottomSensor","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isHitTopSensor","t":4,"rt":$n[0].Boolean,"sn":"isHitTopSensor","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isOnSlope","t":4,"rt":$n[0].Boolean,"sn":"isOnSlope","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isScoring","t":4,"rt":$n[0].Boolean,"sn":"isScoring","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isThrownAble","t":4,"rt":$n[0].Boolean,"sn":"isThrownAble","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"rb","t":4,"rt":$n[1].Rigidbody,"sn":"rb"},{"a":1,"n":"storedAngularVelocity","t":4,"rt":$n[1].Vector3,"sn":"storedAngularVelocity"},{"a":1,"n":"storedVelocity","t":4,"rt":$n[1].Vector3,"sn":"storedVelocity"}]}; }, $n);
    /*BallBehavior end.*/

    /*BasketBehavior start.*/
    $m("BasketBehavior", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"FreezeBasket","t":8,"pi":[{"n":"isFreeze","pt":$n[0].Boolean,"ps":0}],"sn":"FreezeBasket","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"HandleGameStateChange","t":8,"pi":[{"n":"newState","pt":GameState,"ps":0}],"sn":"HandleGameStateChange","rt":$n[0].Void,"p":[GameState]},{"a":1,"n":"MoveBasket","t":8,"sn":"MoveBasket","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"SetNextTarget","t":8,"sn":"SetNextTarget","rt":$n[0].Void},{"a":2,"n":"ToggleBasketMovement","t":8,"pi":[{"n":"enable","pt":$n[0].Boolean,"ps":0}],"sn":"ToggleBasketMovement","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"basketMoveDistance","t":4,"rt":$n[0].Single,"sn":"basketMoveDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"basketMoveSpeed","t":4,"rt":$n[0].Single,"sn":"basketMoveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"centerPosition","t":4,"rt":$n[1].Vector3,"sn":"centerPosition"},{"a":1,"n":"currentDirection","t":4,"rt":$n[0].Int32,"sn":"currentDirection","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"isMoving","t":4,"rt":$n[0].Boolean,"sn":"isMoving","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"rb","t":4,"rt":$n[1].Rigidbody,"sn":"rb"},{"a":1,"n":"targetPosition","t":4,"rt":$n[1].Vector3,"sn":"targetPosition"}]}; }, $n);
    /*BasketBehavior end.*/

    /*GameManager start.*/
    $m("GameManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddBonus","t":8,"sn":"AddBonus","rt":$n[0].Void},{"a":2,"n":"AddScore","t":8,"sn":"AddScore","rt":$n[0].Void},{"a":1,"n":"ApplyRandomMaterial","t":8,"sn":"ApplyRandomMaterial","rt":$n[0].Void},{"a":1,"n":"ApplySelectedMaterial","t":8,"sn":"ApplySelectedMaterial","rt":$n[0].Void},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CountdownTimer","t":8,"sn":"CountdownTimer","rt":$n[2].IEnumerator},{"a":1,"n":"FormattedTime","t":8,"sn":"FormattedTime","rt":$n[0].String},{"a":2,"n":"GetBallInScene","t":8,"sn":"GetBallInScene","rt":System.Array.type(UnityEngine.GameObject)},{"a":2,"n":"GetCurrentBallMaterialIndex","t":8,"sn":"GetCurrentBallMaterialIndex","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GetCurrentGameState","t":8,"sn":"GetCurrentGameState","rt":GameState,"box":function ($v) { return Bridge.box($v, GameState, System.Enum.toStringFn(GameState));}},{"a":2,"n":"GetGlobalVolume","t":8,"sn":"GetGlobalVolume","rt":$n[1].AudioSource},{"a":2,"n":"GetSelectedBallMaterial","t":8,"sn":"GetSelectedBallMaterial","rt":System.Array.type(UnityEngine.Material)},{"a":1,"n":"HandleGameOver","t":8,"sn":"HandleGameOver","rt":$n[0].Void},{"a":1,"n":"HandleGamePlaying","t":8,"sn":"HandleGamePlaying","rt":$n[0].Void},{"a":1,"n":"HandleGameSelectBall","t":8,"sn":"HandleGameSelectBall","rt":$n[0].Void},{"a":1,"n":"HandleGameStarting","t":8,"sn":"HandleGameStarting","rt":$n[0].Void},{"a":2,"n":"IsMobile","t":8,"sn":"IsMobile","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"OnBackToGameButtonClick","t":8,"sn":"OnBackToGameButtonClick","rt":$n[0].Void},{"a":2,"n":"OnConfirmBallButtonClick","t":8,"sn":"OnConfirmBallButtonClick","rt":$n[0].Void},{"a":2,"n":"OnMoveBasketButtonClick","t":8,"sn":"OnMoveBasketButtonClick","rt":$n[0].Void},{"a":2,"n":"OnRandomBallButtonClick","t":8,"sn":"OnRandomBallButtonClick","rt":$n[0].Void},{"a":2,"n":"OnRestartButtonClick","t":8,"sn":"OnRestartButtonClick","rt":$n[0].Void},{"a":2,"n":"OnSelectBallButtonClick","t":8,"sn":"OnSelectBallButtonClick","rt":$n[0].Void},{"a":2,"n":"PlayBasketParticleEffect","t":8,"sn":"PlayBasketParticleEffect","rt":$n[0].Void},{"a":2,"n":"PlayPerfectAudio","t":8,"sn":"PlayPerfectAudio","rt":$n[0].Void},{"a":2,"n":"PlayPerfectParticleEffect","t":8,"sn":"PlayPerfectParticleEffect","rt":$n[0].Void},{"a":2,"n":"PlayRandomBasketAudio","t":8,"sn":"PlayRandomBasketAudio","rt":$n[0].Void},{"a":2,"n":"PlayRandomNetAudio","t":8,"sn":"PlayRandomNetAudio","rt":$n[0].Void},{"a":2,"n":"PlayStreakEffects","t":8,"sn":"PlayStreakEffects","rt":$n[0].Void},{"a":2,"n":"ResetCurrentStreak","t":8,"sn":"ResetCurrentStreak","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"StopBasketParticleEffect","t":8,"sn":"StopBasketParticleEffect","rt":$n[0].Void},{"a":2,"n":"ToggleSprite","t":8,"pi":[{"n":"button","pt":$n[3].Button,"ps":0},{"n":"isChecked","pt":$n[0].Boolean,"ps":1}],"sn":"ToggleSprite","rt":$n[0].Void,"p":[$n[3].Button,$n[0].Boolean]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"UpdateGameState","t":8,"pi":[{"n":"newState","pt":GameState,"ps":0}],"sn":"UpdateGameState","rt":$n[0].Void,"p":[GameState]},{"a":1,"n":"UpdateQuoteUI","t":8,"pi":[{"n":"message","pt":$n[0].String,"ps":0}],"sn":"UpdateQuoteUI","rt":$n[0].Void,"p":[$n[0].String]},{"a":1,"n":"UpdateScoreUI","t":8,"sn":"UpdateScoreUI","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":GameManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":GameManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[GameManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":2,"n":"State","t":16,"rt":GameState,"g":{"a":2,"n":"get_State","t":8,"rt":GameState,"fg":"State","box":function ($v) { return Bridge.box($v, GameState, System.Enum.toStringFn(GameState));}},"s":{"a":1,"n":"set_State","t":8,"p":[GameState],"rt":$n[0].Void,"fs":"State"},"fn":"State"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"backToGameButton","t":4,"rt":$n[3].Button,"sn":"backToGameButton"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ballInScene","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"ballInScene"},{"at":[new UnityEngine.HeaderAttribute("Ball skins system"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ballMaterials","t":4,"rt":System.Array.type(UnityEngine.Material),"sn":"ballMaterials"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"basket","t":4,"rt":BasketBehavior,"sn":"basket"},{"at":[new UnityEngine.HeaderAttribute("Audio"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"basketAudio","t":4,"rt":System.Array.type(UnityEngine.AudioClip),"sn":"basketAudio"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"basketEffect","t":4,"rt":$n[1].ParticleSystem,"sn":"basketEffect"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"checkedSprite","t":4,"rt":$n[1].Sprite,"sn":"checkedSprite"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"confirmBallButton","t":4,"rt":$n[3].Button,"sn":"confirmBallButton"},{"a":1,"n":"currentBallMaterialIndex","t":4,"rt":$n[0].Int32,"sn":"currentBallMaterialIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"currentScore","t":4,"rt":$n[0].Int32,"sn":"currentScore","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("UI Elements"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"currentScoreText","t":4,"rt":$n[4].TextMeshProUGUI,"sn":"currentScoreText"},{"a":1,"n":"currentStreak","t":4,"rt":$n[0].Int32,"sn":"currentStreak","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"globalVolume","t":4,"rt":$n[1].AudioSource,"sn":"globalVolume"},{"a":1,"n":"highScore","t":4,"rt":$n[0].Int32,"sn":"highScore","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"highScoreText","t":4,"rt":$n[4].TextMeshProUGUI,"sn":"highScoreText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"inputManager","t":4,"rt":InputManager,"sn":"inputManager"},{"a":1,"n":"isBasketMoved","t":4,"rt":$n[0].Boolean,"sn":"isBasketMoved","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isRandom","t":4,"rt":$n[0].Boolean,"sn":"isRandom","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isStreakActive","t":4,"rt":$n[0].Boolean,"sn":"isStreakActive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"mainCamera","t":4,"rt":$n[1].Camera,"sn":"mainCamera"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"minStreakStart","t":4,"rt":$n[0].Int32,"sn":"minStreakStart","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveBasketButton","t":4,"rt":$n[3].Button,"sn":"moveBasketButton"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"netAudio","t":4,"rt":System.Array.type(UnityEngine.AudioClip),"sn":"netAudio"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"perfectAudio","t":4,"rt":$n[1].AudioClip,"sn":"perfectAudio"},{"at":[new UnityEngine.HeaderAttribute("Particle"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"perfectEffect","t":4,"rt":$n[1].ParticleSystem,"sn":"perfectEffect"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playingOverlay","t":4,"rt":$n[1].GameObject,"sn":"playingOverlay"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"quoteText","t":4,"rt":$n[4].TextMeshProUGUI,"sn":"quoteText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"quotesBonuses","t":4,"rt":$n[0].Array.type(System.String),"sn":"quotesBonuses"},{"at":[new UnityEngine.HeaderAttribute("Quotes"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"quotesScoring","t":4,"rt":$n[0].Array.type(System.String),"sn":"quotesScoring"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"randomBallButton","t":4,"rt":$n[3].Button,"sn":"randomBallButton"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"restartButton","t":4,"rt":$n[3].Button,"sn":"restartButton"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rotateRing1","t":4,"rt":$n[1].GameObject,"sn":"rotateRing1"},{"at":[new UnityEngine.HeaderAttribute("Game Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scoreBase","t":4,"rt":$n[0].Single,"sn":"scoreBase","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scoreDunk","t":4,"rt":$n[0].Single,"sn":"scoreDunk","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"selectBallButton","t":4,"rt":$n[3].Button,"sn":"selectBallButton"},{"a":1,"n":"selectedBallIndex","t":4,"rt":$n[0].Int32,"sn":"selectedBallIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"selectingBallOverlay","t":4,"rt":$n[1].GameObject,"sn":"selectingBallOverlay"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"selectionCamera","t":4,"rt":$n[1].Camera,"sn":"selectionCamera"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"targetFPS","t":4,"rt":$n[0].Single,"sn":"targetFPS","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"timeBonus","t":4,"rt":$n[0].Single,"sn":"timeBonus","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"timeLimit","t":4,"rt":$n[0].Single,"sn":"timeLimit","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"timeText","t":4,"rt":$n[4].TextMeshProUGUI,"sn":"timeText"},{"a":1,"n":"timer","t":4,"rt":$n[0].Single,"sn":"timer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"uncheckedSprite","t":4,"rt":$n[1].Sprite,"sn":"uncheckedSprite"},{"a":2,"n":"OnGameStateChanged","is":true,"t":2,"ad":{"a":2,"n":"add_OnGameStateChanged","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnGameStateChanged","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnGameStateChanged","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnGameStateChanged","rt":$n[0].Void,"p":[Function]}},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":GameManager,"sn":"Instance"},{"a":1,"backing":true,"n":"<State>k__BackingField","t":4,"rt":GameState,"sn":"State","box":function ($v) { return Bridge.box($v, GameState, System.Enum.toStringFn(GameState));}}]}; }, $n);
    /*GameManager end.*/

    /*GameState start.*/
    $m("GameState", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GameOver","is":true,"t":4,"rt":GameState,"sn":"GameOver","box":function ($v) { return Bridge.box($v, GameState, System.Enum.toStringFn(GameState));}},{"a":2,"n":"Playing","is":true,"t":4,"rt":GameState,"sn":"Playing","box":function ($v) { return Bridge.box($v, GameState, System.Enum.toStringFn(GameState));}},{"a":2,"n":"SelectBall","is":true,"t":4,"rt":GameState,"sn":"SelectBall","box":function ($v) { return Bridge.box($v, GameState, System.Enum.toStringFn(GameState));}},{"a":2,"n":"Starting","is":true,"t":4,"rt":GameState,"sn":"Starting","box":function ($v) { return Bridge.box($v, GameState, System.Enum.toStringFn(GameState));}}]}; }, $n);
    /*GameState end.*/

    /*InputManager start.*/
    $m("InputManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CalculateMovementType","t":8,"sn":"CalculateMovementType","rt":$n[0].Void},{"a":1,"n":"CalculateThrowingTrajectory","t":8,"sn":"CalculateThrowingTrajectory","rt":$n[1].Vector3},{"a":1,"n":"DragBall","t":8,"sn":"DragBall","rt":$n[0].Void},{"a":1,"n":"EndInputTracking","t":8,"pi":[{"n":"pos","pt":$n[1].Vector2,"ps":0}],"sn":"EndInputTracking","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":1,"n":"EndSelectionDrag","t":8,"sn":"EndSelectionDrag","rt":$n[0].Void},{"a":1,"n":"GetInputPosition","t":8,"sn":"GetInputPosition","rt":$n[1].Vector2},{"a":1,"n":"GetSelectedBall","t":8,"sn":"GetSelectedBall","rt":$n[1].GameObject},{"a":2,"n":"GetSelectedBallIndex","t":8,"sn":"GetSelectedBallIndex","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"HandlePlayingInput","t":8,"sn":"HandlePlayingInput","rt":$n[0].Void},{"a":1,"n":"HandleSelectingInput","t":8,"sn":"HandleSelectingInput","rt":$n[0].Void},{"a":1,"n":"HandleStartingInput","t":8,"sn":"HandleStartingInput","rt":$n[0].Void},{"a":1,"n":"InputDown","t":8,"sn":"InputDown","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"InputHold","t":8,"sn":"InputHold","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"InputUp","t":8,"sn":"InputUp","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"PickUpBall","t":8,"sn":"PickUpBall","rt":$n[0].Void},{"a":1,"n":"ReleaseBall","t":8,"sn":"ReleaseBall","rt":$n[0].Void},{"a":1,"n":"SmoothSnapCoroutine","t":8,"sn":"SmoothSnapCoroutine","rt":$n[2].IEnumerator},{"a":1,"n":"SnapToBallPos","t":8,"sn":"SnapToBallPos","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"StartInputTracking","t":8,"pi":[{"n":"pos","pt":$n[1].Vector2,"ps":0}],"sn":"StartInputTracking","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":1,"n":"StartSelectionDrag","t":8,"sn":"StartSelectionDrag","rt":$n[0].Void},{"a":1,"n":"ThrowBall","t":8,"sn":"ThrowBall","rt":$n[0].Void},{"a":2,"n":"TurnToCurrentBallMaterial","t":8,"sn":"TurnToCurrentBallMaterial","rt":$n[0].Void},{"a":2,"n":"TurnToCurrentBallMaterialCoroutine","t":8,"sn":"TurnToCurrentBallMaterialCoroutine","rt":$n[2].IEnumerator},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdateInputTracking","t":8,"pi":[{"n":"pos","pt":$n[1].Vector2,"ps":0}],"sn":"UpdateInputTracking","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":1,"n":"UpdateSelectionDrag","t":8,"sn":"UpdateSelectionDrag","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ballLayer","t":4,"rt":$n[1].LayerMask,"sn":"ballLayer"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ballSelectionLayer","t":4,"rt":$n[1].LayerMask,"sn":"ballSelectionLayer"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ballSelectionParent","t":4,"rt":$n[1].GameObject,"sn":"ballSelectionParent"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ballSelectionRing","t":4,"rt":$n[1].GameObject,"sn":"ballSelectionRing"},{"a":1,"n":"currentBall","t":4,"rt":$n[1].GameObject,"sn":"currentBall"},{"a":1,"n":"endInputPos","t":4,"rt":$n[1].Vector2,"sn":"endInputPos"},{"a":1,"n":"endInputTime","t":4,"rt":$n[0].Single,"sn":"endInputTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fixedZPosition","t":4,"rt":$n[0].Single,"sn":"fixedZPosition","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"isDraggingSelection","t":4,"rt":$n[0].Boolean,"sn":"isDraggingSelection","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isFlicking","t":4,"rt":$n[0].Boolean,"sn":"isFlicking","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isHolding","t":4,"rt":$n[0].Boolean,"sn":"isHolding","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Cameras and Layers"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"mainCamera","t":4,"rt":$n[1].Camera,"sn":"mainCamera"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxFlickTime","t":4,"rt":$n[0].Single,"sn":"maxFlickTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxThrowDepth","t":4,"rt":$n[0].Single,"sn":"maxThrowDepth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxThrowHeight","t":4,"rt":$n[0].Single,"sn":"maxThrowHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxThrowHorizontal","t":4,"rt":$n[0].Single,"sn":"maxThrowHorizontal","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxThrowSpeed","t":4,"rt":$n[0].Single,"sn":"maxThrowSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"minFlickDistance","t":4,"rt":$n[0].Single,"sn":"minFlickDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"minHoldDistance","t":4,"rt":$n[0].Single,"sn":"minHoldDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Input Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"minHoldTime","t":4,"rt":$n[0].Single,"sn":"minHoldTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"minThrowHorizontal","t":4,"rt":$n[0].Single,"sn":"minThrowHorizontal","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"minThrowSpeed","t":4,"rt":$n[0].Single,"sn":"minThrowSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"rb","t":4,"rt":$n[1].Rigidbody,"sn":"rb"},{"a":1,"n":"selectedBallIndex","t":4,"rt":$n[0].Int32,"sn":"selectedBallIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"selectionDragSpeed","t":4,"rt":$n[0].Single,"sn":"selectionDragSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"selectionDragStartPos","t":4,"rt":$n[1].Vector2,"sn":"selectionDragStartPos"},{"a":1,"n":"snapCoroutine","t":4,"rt":$n[1].Coroutine,"sn":"snapCoroutine"},{"a":1,"n":"startInputPos","t":4,"rt":$n[1].Vector2,"sn":"startInputPos"},{"a":1,"n":"startInputTime","t":4,"rt":$n[0].Single,"sn":"startInputTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"throwForce","t":4,"rt":$n[0].Single,"sn":"throwForce","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"throwSensitivity","t":4,"rt":$n[0].Single,"sn":"throwSensitivity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*InputManager end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
