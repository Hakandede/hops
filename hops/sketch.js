
let score = 0;

function setup() {
  createCanvas(400, 400);
  racket = new Racket();
  ball = new Ball();
}

function draw() {
  background(81);

  ball.checkRacket(racket);

  ball.show();
  racket.show();

  racket.update(mouseX);
  ball.update();

  fill(255);
  textSize(30);
  textFont('Courier New');
  text(score, width / 2, 100);
}

