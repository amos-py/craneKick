let canvasRoom = document.getElementById("canvasRoom");

// Sett opp canvas
let ctx = canvasRoom.getContext("2d");
let c_width = canvasRoom.width = 1024;
let c_height = canvasRoom.height = 576;
ctx.fillRect(0, 0, c_width, c_height)

let gravity = 1;
// klasse for spiller



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