var dots = [];

function setup() {
  createCanvas(700,770);
  for (var i = 0; i < 20; i++) {
    for (var j = 0; j < 20; j++) {
      var c;
      c = new Circles((i * 20), (j * 20),(i * 10));
      dots.push(c);
    }
  }
}

function draw() {
  background(255);
  for (var i = 0; i < dots.length; i++) {
    dots[i].display(random(1,255));
  }
}

function Circles(x,y,fillCol){
  this.col = fillCol;
  this.display = function(a){
  fill(this.col);
  fill(a);
  ellipse(x,y,10,10);
  }
}
