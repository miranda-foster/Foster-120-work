let flies = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    let b = new Fly(width/4, height/4, 10);
    flies.push(b);

}

function mouseDragged() {
    let r = random(0, 50);
    let b = new Fly(mouseX, mouseY, r);
    flies.push(b);

}

function draw() {
    background(1, 14, 34);

    for (let i = 0; i < flies.length; i++) {
        flies[i].move();
        flies[i].show();

    }
}

class Fly {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    move() {
        this.x = this.x + random(-15, 15);
        this.y = this.y + random(-15, 15);
    }

    show() {
        stroke(100);
        strokeWeight(1);
        fill("pink");
        ellipse(this.x, this.y, this.r * 0.2);
    }
}
