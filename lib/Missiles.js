
var GamePiece = require('./GamePiece.js');

class Missiles extends GamePiece {
  constructor(x, y, targetX) {
    super(x, y, 5, 5)
    this.startx = this.x;
    this.starty = this.y;
    this.dx = 0;
    this.dy = 0;
    this.targetX = targetX;
    this.targetY = 750;
    this.hasArrived = false;
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
}

module.exports = Missiles;
