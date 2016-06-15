var ring = [];
var newSize = 650;

function setup() {
createCanvas(650,750);
for (var i = 0; i < 75; i++) {
  var r = new Rings(newSize);
  ring.push(r);
  newSize -= 10;
}
}

function draw() {
  background(51);
for (var i = 0; i < ring.length; i++) {
  ring[i].display();
}

}

function Rings(size) {
  this.sizeX = size;
  this.sizeY = size;
  this.fillAmt1 = 255;
  this.fillAmt2 = 0;
  this.fillFactor = 5;



  this.display = function () {
    noFill();
    if (this.fillAmt1 > 0) {
      this.fillAmt1 -= this.fillFactor;
      stroke(this.fillAmt1);
    } else if (this.fillAmt1 <= 0) {
      stroke(this.fillAmt2);
      this.fillAmt2 += this.fillFactor;
    }  if (this.fillAmt2 > 255) {
      this.fillAmt1 = 255;
      stroke(this.fillAmt1);
      this.fillAmt2 = 0;
    }
    ellipse(width / 2,height / 2,this.sizeX,this.sizeY)

  }

}
