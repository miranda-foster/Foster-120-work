
var s;


function setup() {

  createCanvas(windowWidth, windowHeight);
  s = windowHeight;
  mouseX = width;
  mouseY = height;
  background(0);



}

function draw() {
  //background(255);
  push();
  noFill();
     strokeWeight(1);
     let LeWidth = random( 500, width + 500);
     let LeHeight = random( 300, height + 300);
     c = color('hsba(120, 50%, 50%, 0.015)');
     stroke(c);
     ellipse ( windowWidth/4, windowHeight/4, LeWidth, LeHeight);
     c = color('hsba(150, 50%, 55%, 0.15)');
     stroke(c);
     ellipse ( windowWidth/2, windowHeight/2, LeWidth, LeHeight);
     // random circles 2
     let UeWidth = random( 500, width - 300);
     let UeHeight = random( 200, height - 200);
     c = color('hsba(20, 50%, 50%, 0.15)');
     stroke(c);
     ellipse( windowWidth/2, windowHeight/2, UeHeight*2, UeWidth);
     c = color('hsba(40, 30%, 30%, 0.15)')
     stroke(c);
     ellipse( windowWidth/2, windowHeight/2, UeHeight*2, UeWidth);

  pop();




  if  (mouseX>(width/10)-s && mouseX<(width)+s &&
  mouseY>(height/6)-s && mouseY<(height)+s){
  noStroke();
  c = color('hsba(220, 50%, 50%, 0.005)');
  fill(c);
  triangle(mouseX,mouseY,(width/4)-s,(height)-s,(width)+s,(height)-s);
  c = color('hsba(150, 20%, 55%, 0.001)');
  fill(c);
  triangle(mouseX,mouseY,(width/4)+s,(height)-s,(width)+s,(height)+s);
  c = color('hsba(180, 30%, 60%, 0.005)')
  fill(c);
  triangle(mouseX,mouseY,(width/4)+s,(height)+s,(width)-s,(height)+s);
  c = color('hsba(200, 50%, 60%, 0.001)')
  fill(c);
  triangle(mouseX,mouseY,(width/4)-s,(height)+s,(width)-s,(height)-s);
//  }

  //if (mouseX<(width)-s && mouseX>(width)+s && mouseY<(height)-s && mouseY>height+s){
  c = color('hsba(190, 50%, 50%, 0.005)');
  fill(c);
  triangle(mouseX,mouseY,(width/4.5)-s,(height)-s,(width)+s,(height)-s);
  c = color('hsba(70, 60%, 50%, 0.0001)');
  fill(c);
  triangle(mouseX,mouseY,(width/4)-s,(height)-s,(width)+s,(height)-s);
  c = color('hsba(260, 40%, 55%, 0.003)');
  fill(c);
  triangle(mouseX,mouseY,(width/4)+s,(height)-s,(width)+s,(height)+s);
  c = color('hsba(240, 40%, 30%, 0.001)')
  fill(c);
  triangle(mouseX,mouseY,(width/4)+s,(height)+s,(width)-s,(height)+s);
  c = color('hsba(200, 40%, 100%, 0.001)')
  fill(c);
  triangle(mouseX,mouseY,(width/4.5)-s,(height)+s,(width)-s,(height)-s);
  c = color('hsba(300, 30%, 85%, 0.001)');
  fill(c);
  triangle(mouseX,mouseY,(width/4.5)+s,(height)-s,(width)+s,(height)+s);
  c = color('hsba(400, 60%, 30%, 0.005)')
  fill(c);
  triangle(mouseX,mouseY,(width/4.5)+s,(height)+s,(width)-s,(height)+s);
  c = color('hsba(900, 30%, 50%, 0.003)')
  fill(c);
  triangle(mouseX,mouseY,(width/4.5)-s,(height)+s,(width)-s,(height)-s);
  }
}
