class Ball {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.speedX = 0;
        this.speedY = 4;
        this.r = 6;
    }

    checkRacket(racket) {
        if (this.y + this.r > racket.y - racket.h / 2) {
            if (!(this.x + this.r < racket.x - racket.w / 2 || this.x - this.r > racket.x + racket.w / 2)) {
                let directionX = map(this.x, racket.x - racket.w / 2, racket.x + racket.w / 2, -100, 100)
                this.speedX = directionX * 0.08
                console.log(directionX)
                this.speedY *= -1.10;
                score += 1;
            }
        }
    }

    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.speedY += 0.01;
        if (this.x + this.r > width || this.x - this.r < 0) {
            this.speedX *= -1;
        }
        if (this.y + this.r < 0) {
            this.speedY *= -1;
        }
        if (this.y + this.r > height) {
            this.resetBall();
        }
    }

    resetBall() {
        this.y = height / 2;
        this.x = width / 2;
        this.speedY = 4;
        this.speedX = 0;
        score = 0;
    }

    show() {
        fill(255);
        ellipse(this.x, this.y, this.r * 2);
    }
}
