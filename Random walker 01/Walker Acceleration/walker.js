function Walker(x,y){ //The Walker constructor takes to parameters
	this.x = x; // You must assign the parameters to "this" object or instance.
	this.y = y;
	this.col = (200, 100);
	//this.ranx = random(-1,1);
	//this.rany = random(-1,1);

	// Start Walker in center
  	this.pos = createVector(this.x, this.y);
 	// Start with 0 velocity
  	this.vel = createVector(this.ranx, this.rany);
  	//this.vel = createVector(random(-1, 1), random(-1,1);

	
	this.clicked = function(){
		/*results in the distance from the objects center to whereever the 
		mouse was clicked called from mousePressed() function*/

		var d = dist(mouseX, mouseY, this.x, this.y);
				if (d < 24){
			this.col = color(255);
		}
	}

	this.update = function(){
		// Vector at mouse location

    	/*var mouse = createVector(mouseX, mouseY);
    	// Vector pointing from Walker to mouse
    	this.acc = p5.Vector.sub(mouse, this.pos); //p5.Vector is a static function meaning it's called on the idea of Vector not on an object.
		// Setting the magnitude of that vector
    	this.acc.setMag(0.04);

   		// Physics engine algorithm
    	this.vel.add(this.acc);
   		this.pos.add(this.vel);*/
	}

	this.display = function(){
		fill(this.col);
		ellipse(this.pos.x, this.pos.y, 48, 48);
	}
}