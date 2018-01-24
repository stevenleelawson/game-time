var GamePiece = require('./GamePiece.js');

class Missiles extends GamePiece{
  constructor(x, y, width, height) {
    super(x, y, width, height)
    // this.x = x;
    // this.y = y;
    // this.width = width;
    // this.height = height;
    }
    move() {
      this.x += Math.random() * 1;
      this.y += 1;
      return this;
    }
  }




module.exports = Missiles;
