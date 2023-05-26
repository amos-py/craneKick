// Print bakgrunnen, rom/level
let background = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: "./Art/Rooms/dojoBlues.png"
})

// Print Health Bar Outline
let pHealthBar = new Sprite({
    position: {
        x: 10,
        y: 10,
    },
    imageSrc: "./Art/UI/healthBar.png"
})

// Print Enemy Health Bar Outline
let eHealthBar = new Sprite({
    position: {
        x: 530,
        y: 10,
    },
    imageSrc: "./Art/UI/healthBar.png"
})


let health = 100;
let mengde = 0;

function drawHealthBar() {
    // Healthbar bakgrunn
    ctx.fillStyle = 'black';
    ctx.fillRect(540, 20, 458, 53);

    // Healthbar
    ctx.fillStyle = 'blue';
    ctx.fillRect(540, 20, 4.63 * health, 53);
}

function reduceHealth(mengde) {
    health -= mengde;
    if (health < 0) {
        health = 0;
    } 

}


