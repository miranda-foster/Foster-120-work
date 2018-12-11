

function setup() {
	createCanvas(windowWidth, windowHeight);
	strokeWeight(10);
	background("yellow");

}

//falling ellipse variables modified from example
let posX = 0;
let posY = 0;
let d = 50;
let r = d / 25;


function draw() {
//rays
	for (let i = 5; i < windowHeight; i += 10)
	line(20/i, windowHeight, 6*i, 0);


	for (let i = 0; i < 30; i++) {
			//starting x position
			posX = windowWidth * i / 4 + r;
			// object
			stroke("red");
			ellipse(posX, posY, d);
			fill("green");

	}
//falling ellipses
	for (let i = 0; i < 10; i++) {
        // find starting x position
        posX = windowWidth * i / 3 + r;
        // draw an ellipse
        ellipse(posX, posY, d);
    }

//falling ellipse movement
		posY++;
	 if (posY > windowHeight) {
			 posY = 0;
	 }

}
