var GamePiece = require('./GamePiece.js');

class Cities extends GamePiece {
  constructor(x, y, width, height) {
    super(x, y, width, height)
    this.exists = true;
    this.hasArrived = false;
    this.active = true;
    this.fillStyle = '#384155';
  }
}

module.exports = Cities;