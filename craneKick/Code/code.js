let canvasRoom = document.getElementById("canvasRoom");

// Sett opp canvas
let ctx = canvasRoom.getContext("2d");
let c_width = canvasRoom.width = 1024;
let c_height = canvasRoom.height = 576;
ctx.fillRect(0, 0, c_width, c_height)

// Definerer boolean variabler for movement
let a_key = false;
let d_key = false;
let spacebar = false;
let player_grounded = true;

// Definerer tyngdekraft
let gravity = 0.981;

// Kode for bevegelse gjennom wasd
document.onkeydown = function (event) {
    if (event.key == " ") {
        spacebar = true;
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
    if (event.key == " ") {
        spacebar = false;
    }
    if (event.key == "a") {
        a_key = false;
    }
    if (event.key == "d") {
        d_key = false;
   }   
}

function keypress(){

    if (a_key==true && d_key==false){
        player.velocity.x=-7;

    }
    if (d_key==true && a_key==false){
        player.velocity.x=7;

    }
    if (a_key==false && d_key==false){
        player.velocity.x=0;
    }

    if (spacebar==true && player_grounded==true) {
        player.velocity.y = -12;
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
    // playerHitdetection();
    // enemyBehavior();
    playerJump()

    player.updatePosition();
    enemy.updatePosition();
}

animate()