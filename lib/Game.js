
var Missiles = require('./Missiles.js');

class Game {
  constructor(ctx){
    this.score = 0;
    var missiles1 = new Missiles(70, 70, 10, 10)
    var missiles2 = new Missiles(80, 80, 10, 10)
    missiles1.draw(ctx);
    missiles2.draw(ctx);
    var missilesArray = []
    for (var i= 0; i < 6; i++){
      var x = Math.random() * innerWidth;
      var missiles = new Missiles(x, 50, 50, 50);
      missiles.draw(ctx);
      missilesArray.push(missiles);
      console.log(missilesArray);
    }
  
  }
}

module.exports = Game;
