function setup() {
    // create a canvas to draw on
    createCanvas( 1000, 680 );
}

function draw() {

    // background
    background( '#FCE0E4' );

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


  // skirt
    push();
    translate( 0, 90 );


stroke( '#7f5d29' );
    fill( '#7f5d29' );
    quad( -25, 0, 25, 0, 105, 200, -105, 200)
    ellipse( -89, 200, 30, 20 );
    ellipse( -60, 200, 30, 20 );
    ellipse( -30, 200, 30, 20 );
    ellipse( 0, 200, 30, 20 );
    ellipse( 30, 200, 30, 20 );
    ellipse( 60, 200, 30, 20 );
    ellipse( 89, 200, 30, 20 );


    pop(); // skirt END

    /* HEAD */

    push();
    translate( 0, -180 );

    fill( '#d2b48c' );
    stroke( '#d2b48c' );
    ellipse( 0, 0, 150, 190 );

    // mouth
    fill( '#990027' );
    arc( 3,
        52,
        45,
        20,
        radians(355),
        radians(185),
        PIE
    );

    triangle( -5, 40, -25, 53, 5, 50 );
    triangle( 10, 40, 2, 50, 30, 53);





    // nose
translate ( 0, 15 );
    fill ( '#bda27e' )
    ellipse( 0, 8, 23, 15 );

//

    // eyes
    // left
    push();
    translate( -40, -30 );

    fill(255);
    ellipse( 3, 0, 35, 25 );
    noFill();
    fill( '#3a5acc' );
    ellipse( 3, 0, 20 );
    fill( 0 );
    stroke( 0 );
    ellipse( 3, 0, 10 );

    fill( '#5b0017' );
    quad( 15, -30, -5, -20, -30, -10, -25, -20 );
    pop();

    // right
    push();
    translate( 40, -30 );

    fill(255);
    ellipse( -3, 0, 35, 25 );
    noFill();
    fill( '#3a5acc' );
    ellipse( -3, 0, 20 );
    fill( 0 );
    stroke( 0 );
    ellipse( -3, 0, 10 );
    fill( '#5b0017' );
    quad( -15, -30, -5, -20, 30, -10, 15, -20 );
    pop();


push();
fill( '#5b0017' );
quad( -55, -119, 55, -119, 65, -75, -65, -75 );
arc( 0,
    -110,
    100,
    120,
    radians(50),
    radians(100),
    PIE
);
arc( -3,
    -110,
    100,
    120,
    radians(105),
    radians(130),
    PIE
);
arc( -55,
    -99,
    90,
    90,
    radians(100),
    radians(350),
    PIE
);
arc( 55,
    -99,
    90,
    90,
    radians(190),
    radians(80),
    PIE
);
arc( 0,
    -115,
    190,
    400,
    radians(130),
    radians(145),
    PIE
);
arc( 0,
    -115,
    190,
    400,
    radians(35),
    radians(50),
    PIE
);

    pop(); // HEAD END

push();
fill( '#d69c97' );
stroke( '#d69c97' )
ellipse( -55, 2, 30, 20 );
ellipse( 55, 2, 30, 20 );


    pop();
}
