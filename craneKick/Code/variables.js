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
let spacebar = false;
let k_key = false;

// Definerer tyngdekraft
let gravity = 0.981;

//player n enemy stats
let playerSpeed = 5;
let enemyRange = 25;
let enemySpeed = 1;
let enemyCanAttack = false;
let jumpFinished;
let playerExtraJump;
let playerExtraJumpValue = 1;

// player animation variabler
let playerAnimationState = 4;
let playerAnimationIndex = 0;
let playerAnitmationIndexFloat = 0.0;
let playerAnimation = [
    [               0 ], // 0: Still
    [   4,  5,  6,  7 ], // 1: Walking west
    [   8,  9, 10, 11 ], // 2: Walking east
    [  12, 13, 14, 15 ], // 3: Walking north
    [   0,  1,  2,  3 ]  // 4: Walking south
    ];

let playerAnimationFPS = 4;

let bogosBinted = new Image();
        img.src = 'Art/Characters/bogosBinted.jpg';