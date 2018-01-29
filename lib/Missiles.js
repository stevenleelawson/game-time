
var GamePiece = require('./GamePiece.js');

class Missiles extends GamePiece {
  constructor(x, y, ctx, targetX, targetY) {
    super(x, y, 5, 5)
    this.x;
    this.y;
    this.ctx = ctx;
    this.startx = this.x;
    this.starty = this.y;
    this.dx = 0;
    this.dy = 0;
    this.targetX = targetX;
    this.targetY = targetY;
    this.hasArrived = false;
    this.active = true;
    this.previousPosition = [];
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

  draw() {
    this.previousPosition.forEach(missile => {
      this.ctx.fillStyle = '#7B6329';
      this.ctx.fillRect(missile.x, missile.y, 5, 5)
    });
  }

  erase (ctx) {
    ctx.clearRect(this.x, this.y, this.width, this.height);
    // this.active= false means they will be taken out of the array
  }
}

module.exports = Missiles;
