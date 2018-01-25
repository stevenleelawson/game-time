var GamePiece = require('./GamePiece.js');

class Missiles extends GamePiece {
  constructor(x, y, width, height, targetX) {
    super(x, y, width, height)
    this.startx = this.x;
    this.starty = this.y;
    this.dx = 0;
    this.dy = 0;
    this.targetX = targetX;
    this.targetY = 750;
  }
  move() {
    // this.dx = 1;
    // this.dy = 1;
    // this.x += this.dx;
    // this.y += this.dy;
    if (this.y > this.targetY) {
      this.hasArrived = true;
    }

    const opposite = this.targetY - this.y;
    const adjacent = this.targetX - this.x;
    const angle = Math.atan(opposite/adjacent);

    this.dx = Math.cos(angle);
    this.dy = Math.sin(angle);

    if (this.targetX < this.x) {
      this.dy = -this.dy;
      this.dx = -this.dx;
    }

    this.x += this.dx;
    this.y += this.dy;
    return this;
  }

  getTargetx(targetx) {
    this.targetx = targetx;
    console.log(targetx);
  }

  distanceToTarget(dx, dy) {
    this.vx += 1 / (Math.sqrt(dx * dx + dy * dy));
  }

  // draw() {
  //   var targetx = 500;
  //   beginPath();
  //   moveTo(this.startx, this.starty);
  //   lineTo(targetx, 700);
  //   stroke();
  // }

  // targeting() {
    // needs to find the 9 coordinates, and move the missiles towards them
    // need the 9 x,y value pairs of the towers/cites
  // }
}

module.exports = Missiles;
