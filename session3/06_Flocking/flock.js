// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 3: Flocking

// Flock object
// Does very little, simply manages the array of all the boids

function Flock() {
  // An array for all the boids
    this.boids = []; // Initialize the array

  this.run = function() {
    for (var i = 0; i < this.boids.length; i++) {
      this.boids[i].run(this.boids);  // Passing the entire list of boids to each boid individually
    }
  }

  this.addBoid = function(b) {
    this.boids.push(b);
  }
}
