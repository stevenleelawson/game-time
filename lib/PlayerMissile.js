class PlayerMissile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 10;
  }

  draw(ctx) {
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.stroke();
  }

}


module.exports = PlayerMissile;
