function Walker(x,y){ //The Walker constructor takes two parameters
	this.x = x; // You must assign the parameters to "this" object or instance.
	this.y = y;
	//this.col = (200, 100);//used for setting the fil color and alpha
	this.lifespan = 255;
	//this.ranx = random(-1,1);
	//this.rany = random(-1,1);

	// Start Walker in center
  	this.pos = createVector(this.x, this.y);
 	// Start with 0 velocity
  	this.vel = createVector(this.ranx, this.rany);
  	//this.vel = createVector(random(-1, 1), random(-1,1);

  	/*this function is called via "draw" and it continues to check to see if the lifespan of 
  	this instance of the object walker has hit 0. If yes it returns true and if not it 
  	returns false */
  	this.isFinished = function(){
  		if (this.lifespan < 0){
  			return true;
  		} else {
  			return false;
  		}
  	}

	
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
		stroke(255);
		fill(255,this.lifespan);
		ellipse(this.pos.x, this.pos.y, 48, 48);
		this.lifespan --;// decrements the lifespan by 1
	}
}