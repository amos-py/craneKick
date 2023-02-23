// player animations

// spiller av lydfiler på tastetrykk
function jumpAudio () {
    document.addEventListener("keydown", playAudio);
}

function playAudio(event) {
    if (event.key == " ") {
      document.getElementById("audioJump");
    }
  }

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
    if (event.key == " ") {
        spacebar = true;
    }
    if (event.key == "k") {
        k_key = true;
    }

}


  document.onkeyup = function (event) {

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
    if (event.key == "k") {
        k_key = false;
    }
}


// alle button presses som me trenge
function keypress() {

    if (a_key == true && d_key == false) {
        player.velocity.x = playerSpeed * -1;
    }
    if (d_key == true && a_key == false) {
        player.velocity.x = playerSpeed;
    }
    if (a_key == false && d_key == false) {
        player.velocity.x = 0;
    }
    if (s_key == true) {
        player.crouch();
    }
    if (k_key == true) {
        enemy.attack()
        k_key == false;
    }
    if (spacebar == true && player_grounded == true) {
        jumpAudio();
        audioJump.cloneNode().play();
        player.velocity.y = -30;
    }

}//hitbox detection osv.
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

// funksjon for hopping 
function playerJump() {
    if (player.position.y + player.height + player.velocity.y >= c_height) {
        player_grounded = true;
    }
    else {player_grounded = false;}
}