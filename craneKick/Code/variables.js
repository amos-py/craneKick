let canvasRoom = document.getElementById("canvasRoom");

// Sett opp canvas
let ctx = canvasRoom.getContext("2d");
let c_width = canvasRoom.width = 1024;
let c_height = canvasRoom.height = 576;
ctx.fillRect(0, 0, c_width, c_height)

// Definerer boolean variabler for movement
let a_key = false;
let s_key = false;
let d_key = false;
let w_key = false;
let k_key = false;

// Definerer tyngdekraft
let gravity = 0.045;

//player n enemy stats
let mapFloor = 545;
let playerSpeed = 1.5;
let enemyRange = 25;
let enemySpeed = 1;
let enemyCanAttack = false;
let jumpFinished;
let playerExtraJump;
let playerExtraJumpValue = 1;
let playerLeft = false;
let playerRight = true;

//sprite values
let playerAnimationState = 0;
let playerAnimationIndex = 0;
let playerAnitmationIndexFloat = 0.0;
let playerAnimation = [
    [               0 ], // 0: Idle høyre
    [              10 ], // 1: Idle Venstre
    [      0, 1, 2, 3 ], // 2: Walk Høyre
    [  10, 11, 12, 13 ], // 3: Walk venstre
    [              20 ], // 4: Crouch Right
    [              21 ], // 5 Crouch left
    [              30 ], // 6 Jump Right
    [              31 ], // 7 Jump left
    [           40,41 ], // 8 Punch Right
    [           42,43 ], // 9 Punch left
    [           50,51 ], // 10 PunchDown Right
    [           52,53 ], // 11 Punchdown left
    ];

let playerAnimationFPS = 4;


// Player sprites
let spriteSheetURL = "./Art/Characters/spritesheetDrew.png";
let spriteSheetRows = 10;
let spriteSheetColumns = 10;

// enemy sprites
let enemyLeft = true;
let enemyRight = false;
let spriteSheetURL2 = "./Art/Characters/darkdrew.png";
let enemyAnimationState = 4;
let enemyAnimationIndex = 0;
let enemyAnitmationIndexFloat = 0.0;
let enemyAnimation = [
    [               0 ], // 0: Idle høyre
    [              10 ], // 1: Idle Venstre
    [      0, 1, 2, 3 ], // 2: Walk Høyre
    [  10, 11, 12, 13 ], // 3: Walk venstre
    [              20 ], // 4: Crouch Right
    [              21 ], // 5 Crouch left
    [              30 ], // 6 Jump Right
    [              31 ], // 7 Jump left
    [           40,41 ], // 8 Punch Right
    [           42,43 ], // 9 Punch left
    [           50,51 ], // 10 PunchDown Right
    [           52,53 ], // 11 Punchdown left
    ];

