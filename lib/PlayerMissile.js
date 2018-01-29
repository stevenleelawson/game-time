class PlayerMissile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 20;
  }

  draw(ctx) {
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.stroke();
  }
  erase (ctx) {
    ctx.clearRect(this.x, this.y, this.width, this.height);
    // this.active= false means they will be taken out of the array
  }
}


module.exports = PlayerMissile;
