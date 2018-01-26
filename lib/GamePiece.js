
class GamePiece {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.active = true;
  }
  draw(ctx) {
    if (this.active === true) {
      ctx.fillRect(this.x, this.y, this.width, this.height)
      //override each draw method in each subclass with a fillStyle
    }

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
