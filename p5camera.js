var capture;

function setup() {
  createCanvas(0, 0);
  background(51);
  capture = createCapture(VIDEO);
  capture.size(320,280);
  
}

function draw() {
  img = capture.show(mouseX, mouseY);
}
