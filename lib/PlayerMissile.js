class PlayerMissile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 20;
  }

  draw(ctx) {
    console.log('PlayerMissile.draw', ctx)
    ctx.fillStyle = '#C2C6D8';
    ctx.beginPath();
    ctx.strokeStyle = '#7B6329';
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.stroke();
    return this;
  }

  erase(ctx) {
    console.log('PlayerMissile.erase', ctx)
    ctx.clearRect(this.x, this.y, this.width, this.height);
  }

  animate() {
    this.radius++;
    return this;
  }
}


module.exports = PlayerMissile;
