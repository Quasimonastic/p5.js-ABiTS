
function Branch(parent, pos, dir) {
  this.pos = pos;
  this.parent = parent;
  this.dir = dir;
  this.origDir = this.dir.copy();
  this.count = 0;
  this.len = 10;

  this.reset = function() {
    this.dir = this.origDir.copy();
    this.count = 0;
  }
/*The "next" function is called from tree.js the var "nextPos"
gets the new branches next position then "nextBranch"
creates a new Branch of which the "Parent" is "this"*/
this.next = function() {
    var nextDir = p5.Vector.mult(this.dir, this.len);
    var nextPos = p5.Vector.add(this.pos, nextDir);
    var nextBranch = new Branch(this, nextPos, this.dir.copy());
    return nextBranch;
  }

  this.show = function() {
    if (parent != null) {
      stroke(255);
      line(this.pos.x, this.pos.y, this.parent.pos.x, this.parent.pos.y);
    }

  }
}
