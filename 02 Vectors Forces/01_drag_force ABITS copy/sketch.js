var particles = [];

function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < 10; i++) {
    particles[i] = new Particle(random(1,5), random(1,300), random(1,40));
    };
  }

function draw() {
  background(50);
  var wind = createVector(0.1,0);

  for (var i = 0; i < particles.length; i++) {
  // Gravity is scaled by mass here!
  var gravity = createVector(0, 0.1 * particles[i].mass);
  // Apply gravity
  particles[i].applyForce(gravity);
  /*Adding a force you can make up anything you want to*/
  if (mouseIsPressed){
    particles[i].applyForce(wind);
  }

  // Update and display
  particles[i].update();
  particles[i].display();
  particles[i].checkEdges();
  }
}
