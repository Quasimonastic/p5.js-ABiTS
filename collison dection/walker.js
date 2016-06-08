function Walker(x,y){ //The Walker constructor takes to parameters
	this.x = x; // You must assign the parameters to "this" object or instance.
	this.y = y;
	this.r = 24;
	this.col = color(255);
	
 	

	/**/
  	this.intersects = function (other){
  		var d = dist(this.x, this.y, other.x, other.y)
  		if (d < this.r + other.r) {
  			return true;
  		} else {
  			return false;
  		}
  	}

  	this.changeColor = function (){
  		this.col = random(255);
  	}
	/*results in the distance from the objects center to whereever the 
		mouse was clicked called from mousePressed() function*/
	/*this.clicked = function(){
		var d = dist(mouseX, mouseY, this.x, this.y);
				if (d < 24){
			this.col = color(255);
		}
	}*/

	this.update = function(){
   		this.x = this.x + (random(-1,1));
   		this.y = this.y + (random(-1,1));
	}
	
	this.display = function(){
		fill(this.col);
		ellipse(this.x, this.y, this.r * 2, this.r * 2);
		
	}
}