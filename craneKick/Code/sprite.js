class Sprite {
    position;
    velocity;
    constructor({ position, velocity, color = "red" }) {
        this.position = position;
        this.velocity = velocity;
        this.height = 150;
        this.width = 50;
        this.attackPos = {
            xPos: this.position.x,
            yPos: 100,
            width: 100,
            height: 50,
        }
        this.isAttacking;
        this.color = color;
    }
    // tegn spillerene 
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

        //attack
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.attackPos.xPos, this.position.y,
            this.attackPos.width, this.attackPos.height);
    }

    // oppdaterer posisjonen til spilleren
    updatePosition() {
        this.draw()
        this.position.x = this.position.x + this.velocity.x;
        this.position.y = this.position.y + this.velocity.y;

        if (this.velocity.x <= -5) {
            this.attackPos.xPos = this.position.x - this.width;
        }
        if (this.velocity.x >= 5) {
            this.attackPos.xPos = this.position.x;
        }

        // sørger for at spilleren holder seg innenfor cavas
        if (this.position.y + this.height + this.velocity.y >= c_height) {
            this.velocity.y = 0;
        } else {
            this.velocity.y += gravity;
        }
        // prøvde å gjøre samme for høyre og venstre men d bæsj
        if (this.position.x + this.width + this.velocity.x <= 0 ||
            this.position.x + this.width + this.velocity.x >= c_width) {
            this.velocity.x = 0;
        }
    }

    attack() {
        this.isAttacking = true;
        setTimeout(() => {
            this.isAttacking = false
        }, 100)
    }
}
