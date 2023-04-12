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
let gravity = 0.981;

//player n enemy stats
let playerSpeed = 8;
let enemyRange = 25;
let enemySpeed = 1;
let enemyCanAttack = false;
let jumpFinished;
let playerExtraJump;
let playerExtraJumpValue = 1;


//sprite values
let playerAnimationState = 4;
let playerAnimationIndex = 0;
let playerAnitmationIndexFloat = 0.0;
let playerAnimation = [
    [               0 ], // 0: Idle høyre
    [              10 ], // 1: Idle Venstre
    [      0, 1, 2, 3 ], // 2: Walk Høyre
    [  10, 11, 12, 13 ], // 3: Walk venstre
    [               20], // 4: Crouch
    [30], // 5Jump
    [40,41], // 6Punch
    [50,51], // 7PunchDown
    ];

let playerAnimationFPS = 20;


// Player sprites
let spriteSheetURL = "./Art/Characters/spritesheetDrew.png";
let spriteSheetRows = 10;
let spriteSheetColumns = 10;


