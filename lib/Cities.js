var GamePiece = require('./GamePiece.js');

class Cities extends GamePiece {
  constructor(x, y, width, height) {
    super(x, y, width, height)
    this.exists = true;
  }
}

module.exports = Cities;