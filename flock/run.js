let max_clicks = 5;

function setup() {
  createCanvas(750, 750);
  createP("Click to spawn 50 boidlings.");
  strokeWeight(8);

  flock = new Flock();
  purple_flock = new Flock();

  // Initialize boids
  for (let i = 0; i < 5; i++) {
    let b = new Boid(width / 2, height / 2);
    flock.addBoid(b);
  }
}

function draw() {
  background(51);
  flock.run();

  fill(1000); // circle keeps track of your mouse.
  line(mouseX, mouseY, pmouseX, pmouseY);
  ellipse(mouseX, mouseY, 30, 30);
}

// Add new boid
function mouseClicked() {
  if (max_clicks > 0) {
    max_clicks = max_clicks - 1;
    for (let i = 0; i < 50; i++) {
      flock.addBoid(new Boid(mouseX, mouseY));
    }
  } else {
    createP("Maximum number of boids generated.");
  }
}
