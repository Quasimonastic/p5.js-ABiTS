// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 3: Arrive Steering Behavior


var vehicles = [];
var ball;

function setup() {
  createCanvas(640, 360);
  // Create the vehicle
  for (var i = 0; i < 50; i++) {
    var v = new Vehicle(random(0,300), random(0,300), random(0.01,0.1));
    vehicles.push(v);
  }
  // Create the ball and pass it's arguments
  ball = new Ball(random(width), random(height));
}

function draw() {
  background(51);
  ball.display();
  ball.update();
  ball.checkEdges();

  var gravity = createVector(0, 0.05);
  var wind = createVector (0.02, 0);
  ball.applyForce(gravity);
  ball.applyForce(wind);


  // Arrive at the target
  // var target = createVector(mouseX, mouseY);
  var target = createVector(ball.pos.x, ball.pos.y);
  for (var i = 0; i < vehicles.length; i++) {
    vehicles[i].arrive(target);
    vehicles[i].update();
    vehicles[i].display();
  }

}
