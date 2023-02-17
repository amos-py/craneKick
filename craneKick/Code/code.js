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

// Definerer tyngdekraft
let gravity = 1;

// klasse for spiller
class Sprite {
    position;
    velocity;
    constructor( {position, velocity} ) {
        this.position = position;
        this.velocity = velocity;
        this.height = 150;
    }
    // tegn spillerene 
    draw() {
        ctx.fillStyle = "red"
        ctx.fillRect(this.position.x, this.position.y, 50, this.height);
    }

    // oppdaterer posisjonen til spilleren
    updatePosition() {
        this.draw()
        this.position.x = this.position.x + this.velocity.x;
        this.position.y = this.position.y + this.velocity.y;

        // sørger for at spilleren holder seg innenfor cavas
        if (this.position.y + this.height + this.velocity.y >= c_height){
            this.velocity.y = 0;
        } else {
            this.velocity.y += gravity;
        }
    }
}

// Kode for bevegelse gjennom wasd
document.onkeydown = function (event) {
    if (event.key == "w") {
        w_key = true;
    }
    if (event.key == "s"){
        s_key = true;
    } 
    if (event.key == "a") {
        a_key = true;
    } 
    if (event.key == "d") {
        d_key = true;
   }   
}


document.onkeyup = function (event) {
    if (event.key == "w") {
        w_key = false;
    }
    if (event.key == "s"){
        s_key = false;
    } 
    if (event.key == "a") {
        a_key = false;
    } 
    if (event.key == "d") {
        d_key = false;
   }   
}



// Definerer spilleren og dens verdier
let player = new Sprite( {
    position: { 
        x: 0,
        y: 0
    },  
    velocity: {
        x: 0,
        y: 10
    }
}); 

// Definerer motstander og dens verdier
let enemy = new Sprite( {
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
    player.updatePosition();
    enemy.updatePosition();
}

animate()