var ring = [];
var newSize = 650;

function setup() {
createCanvas(720,810);
for (var i = 0; i < 75; i++) {
  var r = new Rings(width / 2,height / 2, newSize, random(1,5));
  ring.push(r);
  newSize -= 8;
  }
}

function draw() {
background(25);
for (var i = 0; i < ring.length; i++) {
  ring[i].display();
  }

}
