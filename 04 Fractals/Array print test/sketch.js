var testArray = ["pizza",2,"howl ",4];
var textPos = 25;
var counter = 4;

function setup() {
  createCanvas(770,800);
  background(51);

  for (var i = 0; i < testArray.length; i++) {
    fill(255);
    if (i < counter) {
      text("test = " + testArray[i],25,textPos);
      textPos += 20;
    }

  }
}

function draw() {

}
