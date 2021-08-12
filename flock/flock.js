let flock;

class Flock {
  constructor() {
    this.boids = []; // Initialize the array
  }
  run() {
    for (let i = 0; i < this.boids.length; i++) {
      this.boids[i].run(this.boids);
    }
  }
  addBoid(b) {
    this.boids.push(b);
  }
}
