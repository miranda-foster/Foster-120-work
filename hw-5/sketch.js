function setup(){
  // canvas for portrait
  createCanvas( windowWidth, windowHeight );
}
// spinning variable
let fruitAngle = 0;
let fruitRotationRate = 60;
let fruitWidth = 90;
let fruitHeight = 110;
let sunAngle = 0;

function draw() {

  background( '#16427e')
  fill( '#e5bc6e' )
  noStroke();
  triangle( 0, 0, 50, 0, 25, 400 );
  triangle( 50, 0, 75, 0, 62, 200 );
  triangle( 75, 0, 87, 0, 81, 100 );
  triangle( 87, 0, 93, 0, 90, 50 );
  triangle( 93, 0, 96, 0, 94.5, 25 );
  triangle( 96, 0, 97.5, 0, 97, 12 );
  triangle( 97.5, 0, 99, 0, 98, 6 );
  triangle( 99, 0, 100, 0, 99.5, 3 );
  noCursor();

  fruitRotationRate = ( mouseY*0.3 ) - 30;
  fruitAngle = fruitAngle + fruitRotationRate;
  sunAngle = sunAngle - 1

  // fruit clock combo
  push();
  /// follow mouse
  translate( mouseX, mouseY );

//////**// clock
  push();


/////// minute hand
  strokeWeight( 10 );
  stroke( '#eee3d0' );

  /// spinning
  push();

  /// move
  translate( 80, -60 );
  rotate( radians(sunAngle) );

  /// draw minute hand
  line( 0, 0, 70, 0 );
  // center circle
  fill( '#eee3d0' );
  noStroke();
  ellipse ( 0, 0, 40 );
  pop();

/////// hour hand
push();
translate( 80, -60 );
rotate( radians(mouseX) );
stroke( '#ecc974' );
line(10, 0, 60, 0);
fill( ' #eee3do ' );
noStroke();
ellipse( 0, 0, 25 );
pop();
pop();

///////////// fruit
push();
noStroke();
fill( '#c56c82' );
ellipse( 0, 100, fruitWidth, fruitHeight );


 
 fill( ' #c56c82' );

}
