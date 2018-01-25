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

  distanceToTarget(dx, dy) {
    this.vx += 1 / (Math.sqrt(dx * dx + dy * dy));
  }
}

module.exports = Missiles;
