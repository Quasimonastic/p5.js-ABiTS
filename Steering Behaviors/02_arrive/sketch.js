// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 3: Arrive Steering Behavior

// A vehicle
// var vehicle;

var vehicles = [];
function setup() {
  createCanvas(640, 360);
  // Create the vehicle
  for (var i = 0; i < 50; i++) {
    var v = new Vehicle(random(0,300), random(0,300), random(0.01,0.1));
    vehicles.push(v);
  }
  // vehicle = new Vehicle(320, 180);

}

function draw() {
  background(51);

  // Arrive at the target
  var target = createVector(mouseX, mouseY);
  for (var i = 0; i < vehicles.length; i++) {
    vehicles[i].arrive(target);
    vehicles[i].update();
    vehicles[i].display();
  }
  // vehicle.arrive(target);

  // Update and display
  // vehicle.update();
  // vehicle.display();
}
