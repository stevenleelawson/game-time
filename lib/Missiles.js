
var GamePiece = require('./GamePiece.js');

class Missiles extends GamePiece {
  constructor(x, y, targetX, targetY, ctx, velocity = 1) {
    super(x, y, 5, 5)
    this.x;
    this.y;
    this.ctx = ctx;
    this.startx = this.x;
    this.starty = this.y;
    this.dx = 0;
    this.dy = 0;
    this.v = velocity;
    this.targetX = targetX;
    this.targetY = targetY;
    this.hasArrived = false;
    this.active = true;
    this.previousPosition = [];
  }

  draw() {
    this.previousPosition.forEach(missile => {
      this.ctx.fillStyle = '#7B6329';
      this.ctx.fillRect(missile.x, missile.y, 5, 5)
    });
  }

  move() {
    if (this.y > this.targetY) {
      this.hasArrived = true;
    }

    const opposite = this.targetY - this.y;
    const adjacent = this.targetX - this.x;
    const angle = Math.atan(opposite / adjacent);
    const x = this.x;
    const y = this.y;

    this.previousPosition.push({x, y});
    this.dx =  this.v * Math.cos(angle);
    this.dy = this.v * Math.sin(angle);

    if (this.targetX < this.x) {
      this.dy = -this.dy;
      this.dx = -this.dx;
    }

    this.x += this.dx;
    this.y += this.dy;
    return this;
  }

  erase (ctx) {
    ctx.clearRect(this.x, this.y, this.width, this.height);
  }
}

module.exports = Missiles;
