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

function initialize() {
    spriteWidth = imgSpriteSheet.width/spriteSheetColumns;
    spriteHeight = imgSpriteSheet.height/spriteSheetRows;

    animate()
}

// funksjon som starter programmet og sørger for at der fortsatter til det stoppes.
let lastTime = Date.now();
function animate() {
    window.requestAnimationFrame(animate);

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, c_width, c_height);
    background.update()

    // Calculate time since last frame
    let timeNow = Date.now();
    let deltatime = (timeNow - lastTime)/1000; // Seconds
    lastTime = timeNow;

    // Player animation
    playerAnitmationIndexFloat += playerAnimationFPS * deltatime;
    playerAnimationIndex = Math.floor(playerAnitmationIndexFloat)
                            % playerAnimation[playerAnimationState].length;

    let s = playerAnimationState;
    let i = playerAnimationIndex;
    let spriteCutStartX = playerAnimation[s][i]%spriteSheetColumns * spriteWidth;
    let spriteCutStartY = Math.floor(playerAnimation[s][i]/spriteSheetColumns) * spriteHeight;



    //funksjoner
    keypress();
    playerHitdetection();
    enemyBehavior();
    playerJump();
    extraJump();

    player.updatePosition();
    enemy.updatePosition();
}



