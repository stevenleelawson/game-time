var GamePiece = require('./GamePiece.js');

class Cities extends GamePiece {
  constructor(x, y, width, height) {
    super(x, y, width, height)
    this.exists = true;
    this.hasArrived = false;
    this.active = true;
  }

  draw(ctx) {
    ctx.fillStyle = '#384155';
    ctx.fillRect(this.x, this.y, this.width, this.height);

  }

  erase (ctx) {
    ctx.clearRect(this.x, this.y, this.width, this.height)
  }
}

module.exports = Cities;