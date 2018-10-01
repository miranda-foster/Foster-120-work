function setup() {
    // create a canvas to draw on
    createCanvas( 1000, 680 );
}

function draw() {

    // background
    background( 'pink' );

    push();

    translate( 500, 340 );

    push();
    translate( 20, 45 );

    // left arm
    stroke( '#d2b48c' );
    strokeWeight( 30 );
    line( -150, 0, -100, -100 );
    line( -180, -120, -150, 0 );

    // hand
    stroke( '#d2b48c' );
    strokeWeight( 50 );
    point( -180, -120 );

    // right arm
    rotate( PI );
    stroke( '#d2b48c' );
    strokeWeight( 30 );
    line( -56, 100, -80, 10 );
    line( -10, -50, -80, 10 );

    // hand
    stroke( '#d2b48c' );
    strokeWeight( 50 );
    point( -10, -50 );


    pop(); // ARMS END


    /* ***************************** */
    /* BODY */
    /* ***************************** */
    push();
    // main shirt
    translate( 0, 25);
fill( '#c1e1de' );
    triangle( 0, 100, -80, -100, 80, -100 );
translate ( 0, -100 );
//shirt design
stroke( '#9bd0cb' );
strokeWeight( 3 );
line( -20, 3, -3, 200 );
line( -30, 3, -6, 200 );
line( -40, 3, -6, 200 );
line( -50, 3, -6, 200 );
line( -60, 3, -6, 200 );
line( -70, 3, -6, 200 );

stroke( '#9bd0cb' );
strokeWeight( 3 );
line( 20, 2.5, 3, 200 );
line( 30, 3, 6, 200 );
line( 40, 3, 6, 200 );
line( 50, 3, 6, 200 );
line( 60, 3, 6, 200 );
line( 70, 3, 5, 200 );
line(-80, 0, -3, 200 );
line(-80, 0, 80, 0 );
line( 80, 0, 1, 200 );


// buttons and collar
  fill( '#9bd0cb' );
  ellipse( 0, 10, 10, 10 );
  ellipse( 0, 30, 10, 10 );
  ellipse( 0, 50, 10, 10 );
  ellipse( 0, 70, 10, 10 );
  ellipse( 0, 90, 10, 10 );
  ellipse( 0, 110, 10, 10 );
  ellipse( 0, 130, 10, 10 );
  ellipse( 0, 150, 10, 10 );
  ellipse( 0, 170, 10, 10 );
    rect( -20, 0, 40, -50 );

// sleeves
    fill( '#c1e1de' );
    triangle( -80, 1, -110, 30, -65, 40 );
    triangle( 80, 1, 105, 30, 65, 40 );




    pop(); // BODY END!


    /* ***************************** */
    /* LEGS */
    /* ***************************** */
    push();
    translate( 0, 90 );

    // left leg
    fill( 'rgb(133, 94, 0)' );
    quad( -20, 0, 20, 0, 100, 200, -100, 200)

    pop(); // LEGS END


    /* ***************************** */
    /* HEAD */
    /* ***************************** */
    push();
    translate( 0, -180 );

    fill( '#d2b48c' );
    stroke( '#d2b48c' );
    ellipse( 0, 0, 160, 190 );

    // mouth
    fill( '#990027' );
    arc(
        0,
        60,
        50,
        20,
        radians(350),
        radians(220),
        PIE
    );


    // nose
translate ( 0, 15 );
    fill ( '#bda27e' )
    ellipse( 0, 5, 20, 15 );



    // eyes
    // left
    push();
    translate( -40, -30 );

    fill(255);
    ellipse( 0, 0, 35, 25 );
    noFill();
    fill( 'rgb(75, 185, 255)' );
    ellipse( 0, 0, 20 );
    fill( 0 );
    ellipse( 0, 0, 10 );

    fill( 'rgb(119, 56, 25)' );
    quad( 10, -30, -5, -20, -30, -10, -25, -20 );
    pop();

    // right
    push();
    translate( 40, -30 );

    fill(255);
    ellipse( 0, 0, 35, 25 );
    noFill();
    fill( 'rgb(75, 185, 255)' );
    ellipse( 0, 0, 20 );
    fill( 0 );
    ellipse( 0, 0, 10 );
    fill( 'rgb(119, 56, 25)' );
    quad( -10, -30, -5, -20, 30, -10, 15, -20 );
    pop();

push();
    // cheeks
    stroke( '#bda27e' );
    strokeweight( 2 );
    line( -20, 30, -5, 5 );

    pop(); // HEAD END




    pop();
}
