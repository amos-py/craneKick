class Sprite {
    position;
    constructor({ position, imageSrc }) {
        this.position = position;
        this.height = 150;
        this.width = 50;
        this.image = new Image();
        this.image.src = imageSrc;
    }

    // tegn sprite 
    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y)
    }

    // oppdaterer posisjonen til spilleren
    update() {
        this.draw()
    }
}

class Fighter {
    position;
    velocity;
    constructor({ position, velocity, color = "IndianRed" }) {
        this.position = position;
        this.velocity = velocity;
        this.height = 150;
        this.width = 50;
        this.attackPos = {
            xPos: this.position.x,
            yPos: this.position.y,
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

        //attack box
        ctx.fillStyle = "LightYellow";
        ctx.fillRect(this.attackPos.xPos, this.attackPos.yPos,
            this.attackPos.width, this.attackPos.height);
    }

    // oppdaterer posisjonen til spilleren
    updatePosition() {
        this.draw()
        this.position.x = this.position.x + this.velocity.x;
        this.position.y = this.position.y + this.velocity.y;
        this.attackPos.yPos= this.position.y;

        // bytte sider ved direksjon
        if (this.velocity.x < 0) {
            this.attackPos.xPos = this.position.x - this.width;
            this.attackPos.yPos = this.position.y;
        }
        if (this.velocity.x > 0) {
            this.attackPos.xPos = this.position.x;
            this.attackPos.yPos = this.position.y;
        }

        // sørger for at spilleren holder seg innenfor canvas
        if (this.position.y + this.height + this.velocity.y >= c_height) {
            this.velocity.y = 0;
        } else {
            this.velocity.y += gravity;
        }

        // prøvde å gjøre samme for høyre og venstre men d bæsj
        if (this.position.x - this.velocity.x <= 0 ||
            this.position.x + this.width + this.velocity.x >= c_width) {
            this.velocity.x = 0;
        }
    }

    attack() {
        this.isAttacking = true;
        setTimeout(() => {
            this.isAttacking = false;
        }, 500)
    }
    crouch(){
        this.height = 90;
        this.attackPos.yPos = this.position.y + this.height/2;
        setTimeout(() => {
            this.attackPos.yPos = this.position.y;
            this.height = 150;
            
        }, 100)
    }
}
