// player animations
let player_grounded = document.getElementById("player_grounded");

// spiller av lydfiler på tastetrykk
function jumpAudio() {
    document.addEventListener("keydown", playAudio);
}

function playAudio(event) {
    if (event.key == " ") {
        document.getElementById("audioJump");
    }
}

let seccond_jump = false;

// Kode for bevegelse gjennom wasd
document.onkeydown = function (event) {

    if (event.key == "s") {
        s_key = true;
    }
    if (event.key == "a") {
        a_key = true;
        playerLeft = true;
        playerRight = false;
    }
    if (event.key == "d") {
        d_key = true;
        playerRight = true;
        playerLeft = false;
    }
    if (event.key == "w") {
        w_key = true;
        console.log(player_grounded)
        console.log(w_key)
    }
    if (event.key == "k") {
        if (!k_key) {
            k_key = true;
            if (playerRight == true) {
                playerAnimationState = 8;
                player.attack()
            }
            if (playerLeft == true) {
                playerAnimationState = 9;
                player.attack()
            }
        }
    }

}

document.onkeyup = function (event) {

    if (event.key == "s") {
        s_key = false;
        if (player_grounded == true) {
            playerAnimationState = 0;
        }
    }
    if (event.key == "a") {
        a_key = false;
        if (player_grounded == true) {
            playerAnimationState = 1;
        }
    }
    if (event.key == "d") {
        d_key = false;
        if (player_grounded == true) {
            playerAnimationState = 0;
        }
    }
    if (event.key == "w") {
        w_key = false;
        if (player_grounded == false) {
            seccond_jump = true;
        }
    }
    if (event.key == "k") {
        k_key = false;
        if (player_grounded == true) {
            if (playerRight == true && k_key == false) {
                playerAnimatonState = 0;
            }
            if (playerLeft == true && k_key == false) {
                playerAnimationState = 1;
            }
        }
    }
}

function extraJump() {
    if (player_grounded == true) {
        playerExtraJump = playerExtraJumpValue;
    }

    if (w_key == true && player_grounded == false && player.velocity.y > -2 && playerExtraJump >= 1 && seccond_jump == true) {
        jumpAudio();
        audioJump.cloneNode().play();
        player.velocity.y = -3.5;
        playerExtraJump--
    }
}

// funksjon for hopping 
function playerJump() {
    if (player.position.y + player.height + player.velocity.y >= mapFloor) {
        player_grounded = true;
        seccond_jump = false;

    }
    else { player_grounded = false; }
}

// alle button presses som me trenge
function keypress() {

    if (a_key == true && d_key == false) {
        player.velocity.x = playerSpeed * -1;
        if (player_grounded == true) {
            playerAnimationState = 3;
        }
        if (player_grounded == false) {
            playerAnimationState = 7;
        }
    }
    if (d_key == true && a_key == false) {
        player.velocity.x = playerSpeed;
        if (player_grounded == true) {
            playerAnimationState = 2;
        }
        if (player_grounded == false) {
            playerAnimationState = 6;
        }
    }
    if (a_key == false && d_key == false && k_key == false) {
        if (player_grounded == true) {
            player.velocity.x = 0;
            if (playerLeft == true) {
                playerAnimationState = 1;
            } else {
                playerAnimationState = 0;
            }
        }
    }


    if (s_key == true && player_grounded == true) {
        player.crouch();
        playerAnimationState = 4;
    }
    if (k_key == true) {

        // ohYeahAudio()
        // ohYeah.cloneNode().play();
    }
    if (w_key == true && player_grounded == true) {
        jumpAudio();
        if (playerLeft == true) {
            playerAnimationState = 7;
        } else {
            playerAnimationState = 6;
        }
        audioJump.cloneNode().play();
        player.velocity.y = -4;
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
        player.isAttacking = false;
        enemy.isAttacked();
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

    }

    // move toward player
    if (enemy.attackPos.xPos - enemyRange >= player.position.x) {
        enemy.velocity.x = enemySpeed * -1;
        enemyAnimationState = 3;
        enemyRight = false;
        enemyLeft = true;

    } else if (enemy.attackPos.xPos + enemy.attackPos.width + enemyRange <= player.position.x + player.width) {
        enemy.velocity.x = enemySpeed;
        enemyAnimationState = 2;
        enemyLeft = false;
        enemyRight = true;
    } else {
        enemy.velocity.x = 0;
        enemy.isAttacking = true;

        enemyAnimationState = 1;
        if (enemyLeft == true) {
            if (enemy.isAttacking == true) {
                enemyAnimationState = 9;
            }
        }
        if (enemyRight == true) {

            enemyAnimationState = 0;
            if (enemy.isAttacking == true) {
                enemyAnimationState = 8;
            }
        }
    }
}

function updateSpritePos() {
    playerX = player.position.x + player.velocity.x;
    playerY = player.position.y + player.velocity.y;
}
