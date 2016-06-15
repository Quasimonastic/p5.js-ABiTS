var tree = [];
var leaves = [];
var count = 0;
var leafPosition = 0;

function setup(){
  createCanvas(600,600);
  var a = createVector(width / 2, height);
  var b = createVector(width / 2, height -100);
  root = new Branch(a,b);
  //zero index is the "root"
  tree[0] = root;
}

function mousePressed() {
  /*Must go through the array backwards so every new branchA
  gets added to the end of the array*/
  for (var i = tree.length - 1; i >= 0 ; i--) {
    if (!tree[i].finished) {
      tree.push(tree[i].branchA());
      tree.push(tree[i].branchB());
    }

    tree[i].finished = true;
  }
  count++;

  if (count === 5) {
    for (var i = 0; i < tree.length; i++) {
      if (!tree[i].finished) {
        var leafPos = tree[i].end.copy();
        leafPosition = leafPos;
        var leaf = new Leaves(random(25,600),random(25,600));
        leaves.push(leaf);
      }
    }
  }
}

function draw() {

  background(51);
  for (var i = 0; i < tree.length; i++) {
    tree[i].show();
    //calls the jitter function which moves each
    //line in a small but random way
    // tree[i].jitter();
  }
  for (var i = 0; i < leaves.length; i++) {
    // fill(255,0,50,100);
    // noStroke();
    // ellipse(leaves[i].x,leaves[i].y,10,10);
    // display leafPos variable
    fill(255);
    textSize(16);
    text("leafPos = " + leafPosition, 50, 50);
    leaves[i].show();

  }
}
