function setup() {
  createCanvas(600, 600);
  createP("Hover over drum or cymbal to hit.");
}

function draw() {
  background(100);
  noStroke();

  drawDrums();
  drawCymbals();
}

function drawDrums() {
  // drums
  if (mouseX > 100 && mouseX < 250 && mouseY > 150 && mouseY < 300) {
    fill(240, 20, 140); // magenta
  } else {
    fill(128);
  }
  snare = rect(100, 150, 150, 150);

  if (mouseX > 260 && mouseX < 510 && mouseY > 260 && mouseY < 510) {
    fill(255, 204, 0); // yellow
  } else {
    fill(128);
  }
  bass = rect(260, 260, 250, 250);

  if (mouseX > 10 && mouseX < 110 && mouseY > 340 && mouseY < 440) {
    fill(255, 204, 100); // blue
  } else {
    fill(128);
  }
  tom1 = rect(10, 340, 100, 100);

  if (mouseX > 130 && mouseX < 230 && mouseY > 340 && mouseY < 440) {
    fill("rgba(0,255,0, 0.25)"); // green
  } else {
    fill(128);
  }
  tom2 = rect(130, 340, 100, 100);
}

function drawCymbals() {
  // cymbals
  if (mouseX > 20 && mouseX < 50 && mouseY > 20 && mouseY < 50) {
    fill("rgb(100%,0%,10%)"); // red
  } else {
    fill(128);
  }
  crash = ellipse(20, 20, 30, 30);

  if (mouseX > 20 && mouseX < 180 && mouseY > -20 && mouseY < 160) {
    fill("#222222"); // black
  } else {
    fill(128);
  }
  hihat = ellipse(100, 60, 80, 80);

  if (mouseX > 200 && mouseX < 600 && mouseY > 0 && mouseY < 320) {
    fill(1000); // white
  } else {
    fill(128);
  }
  ride = ellipse(400, 120, 200, 200);
}
