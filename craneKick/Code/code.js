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
let gravity = 0.981;

//player n enemy stats
let playerSpeed = 5;
let enemyRange = 25;
let enemySpeed = 1;
let enemyCanAttack = false;

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
// spiller av lydfiler på tastetrykk
let jumpKeyPressed = {},
    audio = document.getElementById("audioJump");

document.onkeydown = function (w) {
    if (pressed[e.which]) return;
    pressed[e.which] = e.timeStamp;
    };

    audio.volume = volume;
    audio.play();
    
    pressed[e.which] = 0;

// 
document.addEventListener('keydown', function(w) {
    if (event.key == "w") {
      document.getElementById("audioJump").play();
    }
  });


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
        player.velocity.y = playerSpeed * -1;
    }
    if (a_key == true && d_key == false) {
        player.velocity.x = playerSpeed * -1;
    }
    if (d_key == true && a_key == false) {
        player.velocity.x = playerSpeed;
    }
    if (a_key == false && d_key == false) {
        player.velocity.x = 0;
    }
    if (s_key == true && w_key == false) {
        player.crouch();
    }
    if (spacebar == true) {
        player.attack()
        spacebar = false;
        console.log("spacebar")
    }

}
//hitbox detection osv.
function playerHitdetection() {
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
function enemyBehavior() {
    //enemy hit detection
    if (enemy.attackPos.xPos + enemy.attackPos.width >= player.position.x &&
        enemy.attackPos.xPos <= player.position.x + player.width &&
        enemy.attackPos.yPos + enemy.attackPos.height >= player.height &&
        enemy.attackPos.yPos <= player.position.y + player.height &&
        enemy.isAttacking == true && enemyCanAttack == true) {
        enemy.isAttacking = false;
        enemyCanAttack = false;
        console.log("enemy hit");
    }

    // move toward player
    if (enemy.attackPos.xPos - enemyRange >= player.position.x) {
        enemy.velocity.x = enemySpeed * -1;
    } else if (enemy.attackPos.xPos + enemy.attackPos.width + enemyRange <= player.position.x + player.width) {
        enemy.velocity.x = enemySpeed;
    } else {
        enemy.velocity.x = 0;
        enemyCanAttack = true;
        enemy.attack();
    }
}

function playerJump() {
    if (player.position.y + player.height + player.velocity.y >= c_height) {
        player_grounded = true;
    }
    else {player_grounded = false;}
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
}

animate()