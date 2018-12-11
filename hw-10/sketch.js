// goal: create torus' that spin faster with as the mouse moves from left to right

// array for rotation
var rotation = [ 0.01, -0.01];

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
  background('rgb(128, 128, 128)');

  drawRings1();
  drawRings2();

}
// function to draw tori
function drawRings1(){
  fill('rgb(204, 255, 153)');

  // spin, center and third ring
  rotateX(frameCount * rotation[0]);
  rotateY(frameCount * rotation[0]);
  torus(50, 25);
  torus(200, 25);
}

function drawRings2(){
  // slow spin, second and forth ring
  rotateX(frameCount * rotation[1]);
  rotateY(frameCount * rotation[1]);
  torus(150, 25);
  torus(250, 25);
}
