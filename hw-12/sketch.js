let balls = [];
const numOfBalls = 10;

function setup() {
    // createCanvas(windowWidth, windowHeight);
    createCanvas(windowWidth, 800);

    // create a new ball object of class type "Ball"
    let init_x = 60;
    let init_y = 60;
    for (let i = 0; i < numOfBalls; i++) {
        balls.push(new Ball(init_x, init_y));
        // move the starting position
        // each ball starts in a different spot
        init_x += 100;
        if (init_x > width) {
            init_x = 60;
            init_y += 100;
        }
    }
}

function draw() {
    background('rgb(102, 102, 0)');

    for (let i = 0; i < balls.length; i++) {
        // call methods
        balls[i].ballCheck(balls, i);
        balls[i].edgeCheck(); //need
        balls[i].move(); //need
        balls[i].display(); //need
    }
}


class Ball {
    constructor(x, y, size) {
        this.color = 'rgb(160, 160, 160)';
        this.size = 30;
        this.rad = this.size / 2;
        this.posX = x;
        this.posY = y;
        this.deltaX = random(-5, 5);
        this.deltaY = random(-5, 5);
    }

    display() {
        push();
        // remove the balls outer stroke
        noStroke();
        // set the balls fill color
        fill(this.color);
        // set the position of the ball
        translate(this.posX, this.posY);
        ellipse(0, 0, this.size);
        pop();
    }

    move() {
        this.posX += this.deltaX;
        this.posY += this.deltaY;
    }

    edgeCheck() {
        // check if the ball has hit a vertical wall (left or right walls)
        if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
            this.deltaX *= -1; //need
        }
        // check if the ball has hit a horizontal wall (top or bottom walls)
        if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
            this.deltaY *= -1;
        }
    }


    ballCheck(otherBalls, myId) {
        // for loop touches each of the balls in the array
        for (let n = 0; n < otherBalls.length; n++) {
            // if n != myId, then check for touching
            // otherwise, its ME and we need to skip
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
