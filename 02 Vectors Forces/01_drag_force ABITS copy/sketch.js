var particles = [1,2,3,4];

function setup() {
  createCanvas(windowWidth, windowHeight-4);
  for (var i = 0; i < 500; i++) {
    particles[i] = new Particle(random(0.5,3), random(1,width), random(1,height));
    };
  }

function draw() {
  background(35);
  // text("test = " + particles[1],25,25);

  var wind = createVector(random(0.1, 0.4),0);

  for (var i = 0; i < particles.length; i++) {
  // Gravity is scaled by mass here!
  var gravity = createVector(0, random(-0.03, 0.03) * particles[i].mass);
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
