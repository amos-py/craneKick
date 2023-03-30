// Print bakgrunnen, rom/level
let background = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: "./Art/Rooms/dojoBlues.png"
})

// Print Health Bar
let pHealthBar = new Sprite({
    position: {
        x: 10,
        y: 10,
    },
    imageSrc: "./Art/UI/healthBar.png"
})

// Print Health Bar
let eHealthBar = new Sprite({
    position: {
        x: 530,
        y: 10,
    },
    imageSrc: "./Art/UI/healthBar.png"
})

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

//sprite functions
function initialize() {
    spriteWidth = imgSpriteSheet.width/spriteSheetColumns;
    spriteHeight = imgSpriteSheet.height/spriteSheetRows;

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

    let timeNow = Date.now();
    let deltatime = (timeNow - lastTime)/1000; // Seconds
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
    let spriteCutStartX = playerAnimation[s][i]%spriteSheetColumns * spriteWidth;
    let spriteCutStartY = Math.floor(playerAnimation[s][i]/spriteSheetColumns) * spriteHeight;

    // Draw
    ctx.drawImage(imgSpriteSheet,                                   // Source image
        spriteCutStartX, spriteCutStartY,                           // Start cut   
        spriteWidth, spriteHeight,                                  // Cut dimentions
        player.position.x, player.position.y,          // Start paste
        player.width, player.height);                                 // Paste dimentions

}

// animate()



