let canvasRoom = document.getElementById("canvasRoom");


// Sett opp canvas
let ctx = canvasRoom.getContext("2d");
let c_width = canvasRoom.width = 1024;
let c_height = canvasRoom.height = 576;
ctx.fillRect(0, 0, c_width, c_height)

// Definerer boolean variabler for movement
let w_key = false;
let a_key = false;
let s_key = false;
let d_key = false;
let spacebar = false;

// Definerer tyngdekraft
let gravity = 1;

function randint(max) {
    return Math.floor(Math.random() * max);
}

// Kode for bevegelse gjennom wasd
document.onkeydown = function (event) {
    if (event.key == "w") {
        w_key = true;
    }
    if (event.key == "s") {
        s_key = true;
    }
    if (event.key == "a") {
        a_key = true;
    }
    if (event.key == "d") {
        d_key = true;
    }
    if (event.key == " ") {
        spacebar = true;
    }
}


document.onkeyup = function (event) {
    if (event.key == "w") {
        w_key = false;
    }
    if (event.key == "s") {
        s_key = false;
    }
    if (event.key == "a") {
        a_key = false;
    }
    if (event.key == "d") {
        d_key = false;
    }
    if (event.key == " ") {
        spacebar = false;
    }
}

//alle button presses som me trenge
function keypress() {
    if (w_key == true) {
        player.velocity.y = -5;
    }
    if (a_key == true && d_key == false) {
        player.velocity.x = -5;
    }
    if (d_key == true && a_key == false) {
        player.velocity.x = 5;
    }
    if (a_key == false && d_key == false) {
        player.velocity.x = 0;
    }
    if (spacebar == true) {
        player.attack()
        spacebar = false;
        console.log("spacebar")
    }

}
//hitbox detection osv.

function hitdetection() {
    //player hit detection
    if (player.attackPos.xPos + player.attackPos.width >= enemy.position.x &&
        player.attackPos.xPos <= enemy.position.x + enemy.width &&
        player.attackPos.yPos + player.attackPos.height >= enemy.height &&
        player.attackPos.yPos <= enemy.position.y + enemy.height &&
        player.isAttacking == true) {
        console.log("hit");
        player.isAttacking = false
    }
}
function enemybehavior() {
    //enemy hit detection
    if (enemy.attackPos.xPos + enemy.attackPos.width >= player.position.x &&
        enemy.attackPos.xPos <= player.position.x + player.width &&
        enemy.attackPos.yPos + enemy.attackPos.height >= player.height &&
        enemy.attackPos.yPos <= player.position.y + player.height &&
        enemy.isAttacking == true) {
        console.log("enemy has hit");
        enemy.isAttacking = false
    } else if (enemy.position.x >= player.position.x) {
        if (randint(100) >= 5) {
            setTimeout(() => {
                enemy.velocity.x = -1;
            }, 3000);
        } else {
            setTimeout(() =>{
                enemy.velocity.x=1;
            }, 2000);

        }
    } else if (enemy.position.x <= player.position.x) {
        setTimeout(() => {
            enemy.velocity.x = 1;
        }, 500);

    }
    //enemy move towards player
}
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
    },
    color: "blue",
});


// funksjon som starter programmet og sørger for at der fortsatter til det stoppes.
function animate() {
    window.requestAnimationFrame(animate);

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, c_width, c_height);

    //funksjoner
    keypress();
    hitdetection();
    enemybehavior();


    player.updatePosition();
    enemy.updatePosition();
}

animate()