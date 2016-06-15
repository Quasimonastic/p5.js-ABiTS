

function Rings(x,y,size, f) {
  this.pos = createVector(x,y);
  this.sizeX = size;
  this.sizeY = size;
  this.fillAmt1 = 255;
  this.fillAmt2 = 0;
  this.fillFactor = f;
  this.r = 255;
  this.g = 61;
  this.b = 3;



  this.display = function () {
    noFill();
    this.pos.x += random(-0.3,0.3);
    this.pos.y += random(-0.3,0.3);

    if (this.fillAmt1 > 0) {
      this.fillAmt1 -= this.fillFactor;
      stroke(this.r, this.g, this.b, this.fillAmt1);
    } else if (this.fillAmt1 <= 0) {
      stroke(this.r, this.g, this.b, this.fillAmt2);
      this.fillAmt2 += this.fillFactor;
    }  if (this.fillAmt2 > 255) {
      this.fillAmt1 = 255;
      stroke(this.r, this.g, this.b, this.fillAmt1);
      this.fillAmt2 = 0;
    }
    ellipse(this.pos.x, this.pos.y, this.sizeX,this.sizeY)

  }
}
