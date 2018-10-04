let circle_min = 45;
let circle_max;

function setup() {
    createCanvas( windowWidth, 600);
    frameRate(15);
    circle_max = width - 100;
}


function draw() {
  background( '#c56c82' );

      // random circles 1
      noFill();
      strokeWeight( 2 );
      let LeWidth = random( 2, width + 2);
      let LeHeight = random( 10, height + 10);
      stroke( 0 );
      ellipse ( windowWidth/2, 500, LeWidth, LeHeight);
      stroke( '#eee3d0' );
      ellipse ( windowWidth/2, 100, LeWidth, LeHeight);
      // random circles 2
      let UeWidth = random( 5, width - 5);
      let UeHeight = random( 5, height - 5);
      stroke( 0 );
      ellipse( windowWidth/2, 100, UeHeight, UeWidth);
      stroke( '#eee3d0' );
      ellipse( windowWidth/2, 500, UeHeight, UeWidth);

push();
  let circle_sizeL = map( mouseX, 0, width, circle_min, circle_max );
  let circle_sizeS = map( 0, mouseY, width, circle_min, circle_max/2 );
  let circle_sizeM = map( mouseX, mouseY, width, circle_min+50, circle_max-100 );
  fill( '#e5bc6e');
  noStroke();
/// yellow circles
  ellipse( width*0.75, height/2, circle_sizeL );
  ellipse( width/4, height/2, circle_sizeL );
/// white circle
  fill( '#eee3d0' );
  ellipse( width/2, height/2, circle_sizeM );
/// dark grey circle
  fill( '#343436' );
  ellipse( width/2, height/2, circle_sizeS );
pop();


}
