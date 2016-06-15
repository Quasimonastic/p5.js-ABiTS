function Leaves(xpos, ypos) {
  this.xPos = xpos;
  this.yPos = ypos;

  this.show = function() {
    fill(255,0,50,100);
    noStroke();
    ellipse(this.xPos,this.yPos,10,10);
    }

}
