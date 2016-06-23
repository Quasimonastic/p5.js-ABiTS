var dots = [];
var gridSize = 30;
var canvas;

function setup() {
  canvas = createCanvas(700,770);
  canvas.position(30,30);
  for (var i = 0; i < gridSize; i++) {
    for (var j = 0; j < gridSize; j++) {
      var c;
      c = new Circles((i * 20), (j * 20),(i * 10));
      dots.push(c);
    }
  }
}

function draw() {
  background(255);
  for (var i = 0; i < dots.length; i++) {
    dots[i].display(random(200,255));
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
