var GamePiece = require('./GamePiece.js');

class Missiles extends GamePiece {
  constructor(x, y, width, height) {
    super(x, y, width, height)
  }
  move() {
    this.x += Math.random() * 1;
    this.y += 1;
    return this;
  }
}




module.exports = Missiles;