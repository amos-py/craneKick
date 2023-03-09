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


let background = new Sprite({
    position:{
        x: 0,
        y: 0
    },
    imageSrc: "./Rooms/backgound.png"
})

//player n enemy stats
let playerSpeed = 5;
let enemyRange = 25;
let enemySpeed = 1;
let enemyCanAttack = false;
let jumpFinished;
let playerExtraJump;
let playerExtraJumpValue = 1;

// player animation variabler
let playerAnimationState = 2;
let playerAnimationIndex = 0;
let playerAnitmationIndexFloat = 0.0;
let playerAnimation = [
    [          0   ], // 0: Still
    [  1,  2,  3,  ], // 1: Walking west
    [  4,  5,  6,  ], // 2: Walking east
]

// Player sprites
let spriteSheetURL = "sprite1.png";
let spriteSheetRows = 2;
let spriteSheetColumns = 3;
let spriteWidth;
let spriteHeight;


let playerAnimationFPS = 4;

// let bogosBinted = new Image();
//         img.src = 'Art/Characters/bogosBinted.jpg';