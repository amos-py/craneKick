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
player.draw();

// funksjon som starter programmet og sørger for at der fortsatter til det stoppes.
function animate() {
    window.requestAnimationFrame(animate);

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, c_width, c_height);

    //funksjoner
    keypress();
    playerHitdetection();
    enemyBehavior();
    playerJump()

    player.updatePosition();
    enemy.updatePosition();
    // console.log(player_grounded)
}

animate()