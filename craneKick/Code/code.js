let background = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: "./Art/Rooms/LimeroomConcept.png"
})

// Definerer spilleren og dens verdier
let player = new Fighter({
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
let enemy = new Fighter({
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
let lastTime = Date.now();
function animate() {
    window.requestAnimationFrame(animate);

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, c_width, c_height);
    background.update()

    // Calculate time since last frame
    let timeNow = Date.now();
    let deltatime = (timeNow - lastTime)/1000; // Seconds
    lastTime = timeNow;


    //funksjoner
    keypress();
    playerHitdetection();
    enemyBehavior();
    playerJump();
    extraJump();

    player.updatePosition();
    enemy.updatePosition();
}

animate()



