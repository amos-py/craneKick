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


// Player sprites
let spriteSheetURL = "style4.png";
let spriteSheetRows = 4;
let spriteSheetColumns = 4;
let spriteWidth;
let spriteHeight;
let imgSpriteSheet = new Image();
imgSpriteSheet.src = spriteSheetURL;
imgSpriteSheet.onload = initialize;
