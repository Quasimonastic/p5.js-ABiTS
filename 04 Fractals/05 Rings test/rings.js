

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
  //stroke weight size variable
  this.w = random(0.1,2);



  this.display = function () {
    noFill();
    strokeWeight(this.w);
    this.pos.x += random(-0.3,0.3);
    this.pos.y += random(-0.3,0.3);

    if (this.fillAmt1 > 0) {
      this.fillAmt1 -= this.fillFactor;
      stroke(this.r, this.g, this.b, this.fillAmt1);
    } else if (this.fillAmt1 <= 0) {
      stroke(this.r, this.g, this.b, this.fillAmt2);
      this.fillAmt2 += this.fillFactor;
    }  if (this.fillAmt2 > 255) {
      this.fillAmt1 = random(200,255);
      stroke(this.r, this.g, this.b, this.fillAmt1);
      this.fillAmt2 = random(0,50);;
    }
    ellipse(this.pos.x, this.pos.y, this.sizeX,this.sizeY)

  }
}
