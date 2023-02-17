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
