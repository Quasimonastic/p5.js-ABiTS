var tree;
var max_dist = 100;
var min_dist = 10;

function setup() {
createCanvas(700,790);
tree = new Tree();
}

function draw() {
  background(51);
  tree.show();
  tree.grow();
  // great way to check code is excecuting!!!!!!
  //console.log("testing");
}
