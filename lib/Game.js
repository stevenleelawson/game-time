
var Missiles = require('./Missiles.js');

class Game {
  constructor(ctx){
    this.score = 0;
    var missilesArray = []
    for (var i= 0; i < 6; i++){
      var x = Math.random() * innerWidth;
      var missiles = new Missiles(x, 50, 5, 5);
      missiles.move().draw(ctx);
      missilesArray.push(missiles);
      console.log(missilesArray);
    }
    requestAnimationFrame(function gameLoop(){

      missilesArray.forEach(function (missile) {
        missile.move().draw(ctx);
      });
      requestAnimationFrame(gameLoop);
    })
  }
}

module.exports = Game;
