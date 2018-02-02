// var Game = require('./Game.js')

class GamePiece {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.hasArrived = false;
    // this.ctx = ctx;
  }

  draw(ctx) {
    console.log('gamePiece',ctx)
    ctx.fillStyle = '#C2C6D8';
    ctx.fillRect(this.x, this.y, this.width, this.height)
    return this;
  }

  static calculateDistance(missile, city) {
    let dx = missile.x - city.x;
    let dy = missile.y - city.y;
    let dist = Math.sqrt(dx * dx + dy * dy)

    return dist;
  }
}

module.exports = GamePiece;
 