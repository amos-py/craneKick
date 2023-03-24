// player animations
let player_grounded = document.getElementById("player_grounded");

// spiller av lydfiler på tastetrykk
function jumpAudio () {
    document.addEventListener("keydown", playAudio);
}



function playAudio(event) {
    if (event.key == " ") {
      document.getElementById("audioJump");
    }
  }

// function ohYeahAudio () {
//     document.addEventListener("keydown", playOhYeahAudio);
// }

// function playOhYeahAudio(event) {
//     if (event.key == "k") {
//       document.getElementById("ohYeah").play();
//     }
// }

let lastTime;
let seccond_jump = false;

// Kode for bevegelse gjennom wasd
document.onkeydown = function (event) {

    if (event.key == "s") {
        s_key = true;
    }
    if (event.key == "a") {
        a_key = true;
    }
    if (event.key == "d") {
        d_key = true;
    }
    if (event.key == "w") {
        w_key = true;
    }
    if (event.key == "k") {
        if (!k_key){
            k_key=true;
            player.attack()
        }
    }

}

document.onkeyup = function (event) {

    if (event.key == "s") {
        s_key = false;
        playerAnimationState = 0;
    }
    if (event.key == "a") {
        a_key = false;
        playerAnimationState = 0;
    }
    if (event.key == "d") {
        d_key = false;
        playerAnimationState = 0;
    }
    if (event.key == "w") {
        w_key = false;
        playerAnimationState = 0;
        if (player_grounded == false) {
            seccond_jump = true;
        }
    }
    if (event.key == "k") {
        k_key = false;
    }
}

function extraJump() {
    if (player_grounded == true) {
        playerExtraJump = playerExtraJumpValue;
    }

    if (w_key == true && player_grounded == false && player.velocity.y > -5 && playerExtraJump >= 1 && seccond_jump == true) {   
            jumpAudio();
            audioJump.cloneNode().play();
            player.velocity.y = -15;
            playerExtraJump--
            console.log("jump");
    }
}


// funksjon for hopping 
function playerJump() {
    if (player.position.y + player.height + player.velocity.y >= c_height) {
        player_grounded = true;
        seccond_jump = false;
    }
    else {player_grounded = false;}                                              
}

// alle button presses som me trenge
function keypress() {

    if (a_key == true && d_key == false) {
        player.velocity.x = playerSpeed * -1;
        playerAnimationState = 1;
    }
    if (d_key == true && a_key == false) {
        player.velocity.x = playerSpeed;
        playerAnimationState = 2;
    }
    if (a_key == false && d_key == false) {
        player.velocity.x = 0;
        playerAnimationState = 0;
    }
    if (s_key == true) {
        player.crouch();
    }
    if (k_key == true) {
        player.attack()
        // ohYeahAudio()
        // ohYeah.cloneNode().play();
        k_key == false;
    }
    if (w_key == true && player_grounded == true) {
        jumpAudio();
        audioJump.cloneNode().play();
        player.velocity.y = -16;
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
        player.isAttacking = false
        console.log("hit");
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
        // console.log("enemy hit");
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


// Booting up the game


// lar oss sette sprites på canvas (temp)
