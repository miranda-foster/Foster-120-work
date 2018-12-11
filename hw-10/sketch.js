
// rotation array
var rotation = [ 0.1, -0.1];

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
  background('black');

  drawRings1();
  drawRings2();

}

function drawRings1(){
  push ();
  normalMaterial();
  rotateX(frameCount * rotation[0]);
  rotateY(frameCount * rotation[0]);
  torus(250, 2);
  torus(200, 15);
  pop();

}

function drawRings2(){
  fill("white");
  rotateX(frameCount * rotation[1]);
  rotateY(frameCount * rotation[1]);
  cone(130, 80);
  torus(150, 5);
}
