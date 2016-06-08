//Random walker with Acceleration 

var walkers = []; //Empty array

function setup() {
createCanvas(640,360);
for (var i = 0; i < 5; i++) { //for loop fills array with new Walker objects
	walkers[i] = new Walker (random(width/2), random(height/2)); //sets initial walkers to random locations
}
}

function mousePressed(){ 
	//walkers.push(new Walker (mouseX, mouseY));//adds a new walker to the "walkers" array at the mouse pressed location
	for (var i = 0; i < walkers.length; i++) {
		walkers[i].clicked();//steps through array and calls "clicked" on each object which checks to see if the mouse is being clicked inside the object
	}
}

function draw() {
  background(25);
  for (var i = 0; i < walkers.length; i++) { //for loop animates (via .update and .display) each object
  	walkers[i].update();
  	walkers[i].display();
  }
  
}



