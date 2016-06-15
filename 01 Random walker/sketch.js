var w;
function setup() {
createCanvas (640, 360);
w = new Walker;
}

function draw() {
  background(51);
  w.update();
  w.display();
}

function Walker() {

  // Start Walker in center
  this.pos = createVector(width / 2, height/2);
  // Start with 0 velocity
  this.vel = createVector(0, 0);

  this.update = function() {
    // Vector at mouse location
    var mouse = createVector(mouseX, mouseY);
    // Vector pointing from Walker to mouse
    this.acc = p5.Vector.sub(mouse, this.pos);
    // Setting the magnitude of that vector
    this.acc.setMag(0.1);

    // Physics engine algorithm
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  this.display = function() {
    // Draw Walker as circle
    fill(255);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }
}