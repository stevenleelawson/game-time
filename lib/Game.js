
var Missiles = require('./Missiles.js');
var Cities = require('./Cities.js');
var Towers = require('./Towers.js');

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
  var cities1 = new Cities(240, 700, 50, 50);
  var cities2 = new Cities(340, 700, 50, 50);
  var cities3 = new Cities(440, 700, 50, 50);
  var cities4 = new Cities(740, 700, 50, 50);
  var cities5 = new Cities(840, 700, 50, 50);
  var cities6 = new Cities(940, 700, 50, 50);
  cities1.draw(ctx);
  cities2.draw(ctx);
  cities3.draw(ctx);
  cities4.draw(ctx);
  cities5.draw(ctx);
  cities6.draw(ctx);
  
  var towers1 = new Towers(50, 650, 60, 100);
  var towers2 = new Towers(600, 650, 60, 100);
  var towers3 = new Towers(1100, 650, 60, 100);

  towers1.draw(ctx);
  towers2.draw(ctx);
  towers3.draw(ctx);
  }
}

module.exports = Game;
