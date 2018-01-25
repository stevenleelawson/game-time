
var Missiles = require('./Missiles.js');
var Cities = require('./Cities.js');
var Towers = require('./Towers.js');

class Game {
  constructor(ctx) {
    this.score = 0;

    var city1 = new Cities(240, 700, 50, 50);
    var city2 = new Cities(340, 700, 50, 50);
    var city3 = new Cities(440, 700, 50, 50);
    var city4 = new Cities(740, 700, 50, 50);
    var city5 = new Cities(840, 700, 50, 50);
    var city6 = new Cities(940, 700, 50, 50);

    city1.draw(ctx);
    city2.draw(ctx);
    city3.draw(ctx);
    city4.draw(ctx);
    city5.draw(ctx);
    city6.draw(ctx);
  
    var tower1 = new Towers(50, 650, 60, 100);
    var tower2 = new Towers(600, 650, 60, 100);
    var tower3 = new Towers(1100, 650, 60, 100);

    tower1.draw(ctx);
    tower2.draw(ctx);
    tower3.draw(ctx);
    
    var targetArray = [city1.x, city2.x, city3.x, city4.x, city5.x, city6.x, tower1.x, tower2.x, tower3.x];
    console.log(targetArray);
    var missilesArray = []

    for (var i = 0; i < 9; i ++) {
      let targetx = targetArray[Math.floor(Math.random() * 9)];
      console.log(targetx);
      var x = Math.random() * innerWidth;
      var y = 0;
      var missiles = new Missiles(x, y, 5, 5, 240);
      missiles.move().draw(ctx).getTargetx();
      missilesArray.push(missiles);
    }

    requestAnimationFrame(function gameLoop() {

      missilesArray.forEach(function (missile) {
        missile.move().draw(ctx);
        // this is where we will call targeting()
      });
      requestAnimationFrame(gameLoop);
    })
  }
}

module.exports = Game;
