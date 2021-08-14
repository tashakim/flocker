function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  background(100);
  ellipse(mouseX, mouseY, 30, 30);
}

function mouseClicked() {
  console.log(mouseX, mouseY);

  createP("".concat("Coordinates: ", String(mouseX), ", ", String(mouseY)));
}
