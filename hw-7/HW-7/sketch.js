

var ball = {};
ball.width = 100;
ball.x = 200;
ball.y = 0;
ball.delta_x = 2;
ball.delta_y = 2;
ball.scale_x = 3;
ball.scale_y = 3;



function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#c70039');
    frameRate(50);
}



function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }
    stroke('#DAF7A6');
    fill(random(0, 255), random(0, 255), random(0, 100), random(0, 50));
    ellipse(ball.x, ball.y, ball.width, ball.width);




}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 5);
    ball.scale_y = map(mouseY, 0, height, 0.5, 25);
}
