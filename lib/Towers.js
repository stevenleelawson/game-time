var GamePiece = require('./GamePiece.js');

class Towers extends GamePiece {
  constructor(x, y, width, height) {
    super(x, y, width, height)
    this.exists = true;
  }
  // draw(ctx) {
  //   if(this.hasArrived === true) {
  //     ctx.fillRect(this.x, this.y, this.width, this.height)
  //
  //   } else {
  //     ctx.clearRect(this.x, this.y, this.width, this.height)
  //   }
  // }
}

module.exports = Towers;
