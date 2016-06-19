function Particle(m,x,y) {
  this.mass = m;
  this.position = createVector(x,y);
  this.velocity = createVector(0,0);
  this.acceleration = createVector(0,0);

  // Newton's 2nd law: F = M * A
  // or A = F / M
  this.applyForce = function(force) {
    /*This is where Acceleration gets set. The parameter "force"
    is being set by the argument "gravity" established in the Draw function.
    */
    //A = F / M - p5.Vector.div is dividing force by mass
    // var f = p5.Vector.div(force,this.mass);
    //Var "f" must be used so that the original value captured by "force" isn't disturbed
    this.acceleration.add(force);
  };

  this.update = function() {
    // Velocity changes according to acceleration
    this.velocity.add(this.acceleration);
    // position changes by velocity
    this.position.add(this.velocity);
    // ****** We must clear acceleration each frame ******
    this.acceleration.mult(0);
  };

  this.display = function() {
    stroke(255,61,3,150);
    strokeWeight(2);
    fill(255,61,3,random(50,150));
    ellipseMode(CENTER);
    ellipse(this.position.x,this.position.y,this.mass*16,this.mass*16);
  };

  // Bounce off bottom of window
  this.checkEdges = function() {
    // display xpos variable
    /*fill(255);
    text("xpos = " + round(this.position.x), 25, 25);*/
    if (this.position.y > height) {
      this.velocity.y *= -0.9;  // A little dampening when hitting the bottom
      this.position.y = height;
    } else if (this.position.y <= 0) {
      this.velocity.y *= -0.9;  // A little dampening when hitting the bottom
      this.position.y = 0;
    }
    if (this.position.x > width) {/*Checks the left and right edges*/
      this.velocity.x *= -0.9;  // A little dampening when hitting the Side
      this.position.x = width; // Must reset x so balls don't get stuck on wall
    } else if (this.position.x <= 0){
      this.velocity.x *= -0.7;
      this.position.x = 0; // Must reset x so balls don't get stuck on wall
    }
  }

}
