let bits = [];
let balls = [];
const howManyBalls = 100;

function setup() {
    createCanvas(windowWidth, windowHeight);
    let b = new Bit(width/2, height/2, 10);
        bits.push(b);
    let spot_x = 10;
    let spot_y = 10;
    for (let i = 0; i < howManyBalls; i++) {
        balls.push(new Ball(spot_x, spot_y));

        spot_x += 100;
        if (spot_x > width) {
            spot_x = 60;
            spot_y += 100;
        }
    }
}
function mouseDragged() {
  let r = random(10, 50);
  let b = new Bit(mouseX, mouseY, r);
  bits.push(b);
}


function draw() {
    background('rgb(100, 12, 46)');

    for (let i = 10; i < balls.length; i++) {
        // calls
        balls[i].ballCheck(balls, i);
        balls[i].edgeCheck();
        balls[i].bitCheck(bits, i);
        balls[i].move();
        balls[i].display();
    }

    for (let i = 0; i < bits.length; i++) {
      bits[i].move();
      bits[i].show();
    }
}

class Bit {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y +random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r * 2);
  }
}

class Ball {
    constructor(x, y, size) {
        this.color = 'rgb(160, 160, 40)';
        this.size = 10;
        this.rad = this.size / 4;
        this.posX = x;
        this.posY = y;
        this.deltaX = random(-15, 15);
        this.deltaY = random(-15, 15);
    }

    display() {
        push();
      //Design
        noStroke();
        fill(this.color);
      //position
        translate(this.posX, this.posY);
        ellipse(15, 15, this.size);
        pop();
    }

    move() {
        this.posX += this.deltaX;
        this.posY += this.deltaY;
    }

    bitCheck(otherBits, anId) {
      for (let n = 10; n < otherBits.length; n++) {

        if (n !=anId) {
          let p = dist(this.posX, this.posY, otherBits[n].posX, otherBits[n].posY);
          let combinedQ = this.rad + otherBits[n].rad;

            if (p <= combinedQ) {
              this.deltaX *= -1;
              this.deltaY *= -1;

        }
      }
    }
}


    edgeCheck() {

        if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
            this.deltaX *= -1;
        }

        // horizontal walls
        if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
            this.deltaY *= -1;
        }
    }


    ballCheck(otherBalls, myId) {

        for (let n = 10; n < otherBalls.length; n++) {

            if (n != myId) {
                let d = dist(this.posX, this.posY, otherBalls[n].posX, otherBalls[n].posY);
                let combinedR = this.rad + otherBalls[n].rad;

                if (d <= combinedR) {
                    this.deltaX *= -1;
                    this.deltaY *= -1;

                }
            }
        }
    }
}
