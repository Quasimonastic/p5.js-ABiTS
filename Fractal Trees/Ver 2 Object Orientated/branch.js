function Branch(begin,end) {
  this.begin = begin;
  this.end = end;
  this.finished = false;
// moves each new lines end point in a small
// but random way
  this.jitter = function () {
    this.end.x += random(-1,1);
    this.end.y += random(-1,1);
  }


this.show = function() {
  stroke(255);
  line(this.begin.x,this.begin.y,this.end.x,this.end.y);
  }

  this.branchA = function () {
    //creates a direction vector by subtracting the end
    //vector from the begin vector.
    var dir = p5.Vector.sub(this.end, this.begin);
    //next we rotate this vector by 45 degrees
    dir.rotate(PI / 6);
    //multimuly dir vector by 0.67 to shrink the branch
    //slightly
    dir.mult(0.67);
    //now add newEnd to the dir vector to get the
    //new endpoint.
    var newEnd = p5.Vector.add(this.end, dir);
    //call the Branch constructor function.
    var a = new Branch(this.end, newEnd);
    //Must remember to have the makeBranch function
    // return an argument.
    return a;
  }

  this.branchB = function () {
    //creates a direction vector by subtracting the end
    //vector from the begin vector.
    var dir = p5.Vector.sub(this.end, this.begin);
    //next we rotate this vector by 45 degrees
    dir.rotate(-PI / 3);
    dir.mult(0.67);
    //now add newEnd to the dir vector to get the
    //new endpoint.
    var newEnd = p5.Vector.add(this.end, dir);
    //call the Branch constructor function.
    var b = new Branch(this.end, newEnd);
    //Must remember to have the makeBranch function
    // return an argument.
    return b;
  }
}
