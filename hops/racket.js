class Racket {
    constructor() {
        this.x = 200;
        this.y = 360;
        this.w = 100;
        this.h = 16;
        this.xChange = 0;
    }

    update(xChange) {
        this.x = xChange;
        this.x = constrain(this.x, this.w / 2 + 5, width - this.w / 2 - 5);
    }

    show() {
        fill(255);
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h);
    }
}
