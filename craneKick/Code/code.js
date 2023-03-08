// Definerer spilleren og dens verdier
let player = new Sprite({
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
let enemy = new Sprite({
    position: {
        x: 400,
        y: 100
    },
    velocity: {
        x: 0,
        y: 10
    }
}); 

// funksjon som starter programmet og sørger for at der fortsatter til det stoppes.
function animate() {
    window.requestAnimationFrame(animate);

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, c_width, c_height);

    //funksjoner
    keypress();
    playerHitdetection();
    enemyBehavior();
    playerJump();
    extraJump();

    player.updatePosition();
    enemy.updatePosition();
}

let imgSpriteSheet = new Image();
imgSpriteSheet.src = spriteSheetURL;
imgSpriteSheet.onload = initialize;

function initialize() {
    spriteWidth = imgSpriteSheet.width/spriteSheetColumns;
    spriteHeight = imgSpriteSheet.height/spriteSheetRows;

    animate()
}


