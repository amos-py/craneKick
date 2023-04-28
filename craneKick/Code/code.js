
// Definerer spilleren og dens verdier
let player = new Fighter({
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 10
    },
    attackColor: "yellow"
    
});




// Definerer motstander og dens verdier
let enemy = new Fighter({
    position: {
        x: 400,
        y: 100
    },
    velocity: {
        x: 0,
        y: 10
    }
});

let imgSpriteSheet = new Image();
imgSpriteSheet.src = spriteSheetURL;
imgSpriteSheet.onload = initialize;

let enemyImgSpriteSheet = new Image();
enemyImgSpriteSheet.src = spriteSheetURL2;
enemyImgSpriteSheet.onload = initialize;

//sprite functions
function initialize() {
    spriteWidth = imgSpriteSheet.width / spriteSheetColumns;
    spriteHeight = imgSpriteSheet.height / spriteSheetRows;
    
    animate();
}

let lastTime = Date.now();
// funksjon som starter programmet og sørger for at der fortsatter til det stoppes.
function animate() {
    window.requestAnimationFrame(animate);

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, c_width, c_height);
    background.onload = background.update()
    pHealthBar.update()
    eHealthBar.update()
    drawHealthBar();


    let timeNow = Date.now();
    let deltatime = (timeNow - lastTime) / 1000; // Seconds
    lastTime = timeNow;

    //funksjoner
    keypress();
    playerHitdetection();
    enemyBehavior();
    playerJump();
    extraJump();

    updateSpritePos()
    player.updatePosition();
    enemy.updatePosition();

    // Player animation
    playerAnitmationIndexFloat += playerAnimationFPS * deltatime;
    playerAnimationIndex = Math.floor(playerAnitmationIndexFloat)
        % playerAnimation[playerAnimationState].length;

    let s = playerAnimationState;
    let i = playerAnimationIndex;
    let spriteCutStartX = playerAnimation[s][i] % spriteSheetColumns * spriteWidth;
    let spriteCutStartY = Math.floor(playerAnimation[s][i] / spriteSheetColumns) * spriteHeight;

    // Enemy animation
    enemyAnitmationIndexFloat += playerAnimationFPS * deltatime;
    enemyAnimationIndex = Math.floor(enemyAnitmationIndexFloat)
        % enemyAnimation[enemyAnimationState].length;

    let sEnemy = enemyAnimationState;
    let iEnemy = enemyAnimationIndex;
    let enemySpriteCutStartX = enemyAnimation[sEnemy][iEnemy] % spriteSheetColumns * spriteWidth;
    let enemySpriteCutStartY = Math.floor(enemyAnimation[sEnemy][iEnemy] / spriteSheetColumns) * spriteHeight;


    // Draw
    ctx.drawImage(imgSpriteSheet,                                   // Source image
        spriteCutStartX, spriteCutStartY,                           // Start cut   
        spriteWidth, spriteHeight,                                  // Cut dimentions
        player.position.x - player.width, player.position.y,          // Start paste
        150, 200);                                 // Paste dimentions

        ctx.drawImage(enemyImgSpriteSheet,                                   // Source image
        enemySpriteCutStartX, enemySpriteCutStartY,                           // Start cut   
        spriteWidth, spriteHeight,                                  // Cut dimentions
        enemy.position.x - enemy.width, enemy.position.y,          // Start paste
        150, 200);                                 // Paste dimentions
}

// animate()



