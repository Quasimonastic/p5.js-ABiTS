function Ball(x,y){
  this.pos = createVector(x,y);
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);
  this.mass = 0.75;

this.applyForce = function (force) {
  var f = force.copy();
  f.div(this.mass);
  this.acc.add(f);

}

this.update = function (){
  this.vel.add(this.acc);
  this.pos.add(this.vel);
  this.acc.mult(0);
}

this.display = function () {
  noStroke();
  fill(255,0,150,100);
  ellipse(this.pos.x,this.pos.y,20,20);
}

this.checkEdges = function () {
  if (this.pos.y > height) {
    this.vel.y *= -1;
    this.pos.y = height;
  }else if (this.pos.y < 0) {
    this.vel.y *= -1;
    this.pos.y = 0;
  }
  if (this.pos.x > width) {
    this.vel.x *= -0.9;
    this.pos.x = width;
  }else if (this.pos.x < 0) {
    this.vel.x *= -0.8;
    this.pos.x = 0;
  }
  }




}
