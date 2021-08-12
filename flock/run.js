function setup() {
  createCanvas(750, 750);
  createP("Click to spawn 50 boidlings.");
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
}

// Add new boid
function mouseClicked() {
  for (let i = 0; i < 50; i++) {
    flock.addBoid(new Boid(mouseX, mouseY));
  }
}
