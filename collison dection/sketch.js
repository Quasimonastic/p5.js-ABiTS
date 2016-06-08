//Random walker with intersect detection 

var walkers = []; //Empty array

function setup() {
createCanvas(640,360);
for (var i = 0; i < 5; i++) { //for loop fills array with new Walker objects
  //sets initial walkers to random locations
	walkers[i] = new Walker (random(width/2), random(height/2)); 
  }
}



function draw() {
  background(25);
  //for loop animates (via .update and .display) each object
  /*This for loop is going backwards through the array by starting at the end - 
  "var i = walkers.length - 1", ending at the beginning - "i >= 0" and counting 
  backwards - "i--"*/
  for (var i = 0; i < walkers.length; i++) { 
  	walkers[i].update();
  	walkers[i].display();
  
    for (var j = 0; j < walkers.length; j++) {
      if (i != j && walkers[i].intersects(walkers[j])){
      walkers[i].changeColor();
      walkers[j].changeColor();
      }

    }
  }
  
}



