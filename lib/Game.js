var GamePiece = require('./GamePiece.js');
var Missiles = require('./Missiles.js');
var Cities = require('./Cities.js');
var Towers = require('./Towers.js');
var PlayerMissile = require('./PlayerMissile.js');

class Game {
  constructor(ctx) {
    this.score = 0;
    this.ctx = ctx
    this.playerMissiles = [];
    // These will be used for when a new round starts
    // this.missilesLeft = [];
    // this.targetsLeft = [];
    // this.bulletsLeft = [];
  }

  createExplosion(eventObject) {
    let explosion = new PlayerMissile(eventObject.x, eventObject.y);

    explosion.draw(this.ctx);
    this.playerMissiles.push(explosion);
    return this;
  }

  update(ctx, playerMissiles, score) {
    var city1 = new Cities(240, 695, 50, 50);
    var city2 = new Cities(340, 695, 50, 50);
    var city3 = new Cities(440, 695, 50, 50);
    var city4 = new Cities(740, 695, 50, 50);
    var city5 = new Cities(840, 695, 50, 50);
    var city6 = new Cities(940, 695, 50, 50);
    var tower1 = new Towers(50, 650, 60, 100);
    var tower2 = new Towers(600, 650, 60, 100);
    var tower3 = new Towers(1100, 650, 60, 100);

    let targetArray = [city1, city2, city3, city4, city5, city6, tower1, tower2, tower3];

    city1.draw(ctx);
    city2.draw(ctx);
    city3.draw(ctx);
    city4.draw(ctx);
    city5.draw(ctx);
    city6.draw(ctx);
    tower1.draw(ctx);
    tower2.draw(ctx);
    tower3.draw(ctx);

    var missilesArray = [];

    function createMissiles(velocity) {
      for (var i = 0; i < 9; i ++) {
        console.log('createMiss',velocity)
        let targetIndex = Math.floor(Math.random() * 9);
        let targetx = targetArray[targetIndex].x;
        let targety = targetArray[targetIndex].y;
        var velocity = 1;
        var x = Math.random() * innerWidth;
        var y = 0;
        var missiles = new Missiles(x, y, ctx, targetx, targety, velocity);

        missilesArray.push(missiles);
      }
    }

    function drawMissiles () {
      missilesArray.forEach(function (missile) {
        missile.move().draw(ctx);
      });
    }

    function drawTargets () {
      targetArray.forEach(function (target) {
        target.draw(ctx);
      });
    }

    function animateMissiles() {
      playerMissiles.forEach(function (missile) {
        if(missile.radius < 35) {
          missile.draw(ctx).animate();
        } else {
          missile.erase(ctx);
        }
      });
    }

    function collisionDetect () {
      targetArray.forEach( (target, i) => {
        missilesArray.forEach( (missile, j) => {
          let distance = GamePiece.calculateDistance(missile, target);

          if (distance < 10) {
            missile.hasArrived = true;
            target.active = false;
            targetArray.splice(i, 1);
            target.erase(ctx);
            missilesArray.splice(j, 1);
            missile.erase(ctx);
          }
        });
      });
    }

    function playerCollisionDetect() {
      playerMissiles.forEach( (playerMissile, i) => {
        missilesArray.forEach( (missile, j) => {
          let distance = GamePiece.calculateDistance(missile, playerMissile);

          if (distance < playerMissile.radius) {
            missile.hasArrived = true;
            playerMissiles.splice(i, 1);
            playerMissile.erase(ctx);
            missilesArray.splice(j, 1);
            missile.erase(ctx);
          }
          updateScore(missile.hasArrived);
        });
      });
    }
    function secondWave () {
      if(missilesArray.length === 0) {
        createMissiles(11);
        drawMissiles();
      }
    }
    function updateScore(missile) {
      if (missile) {
        score += 10;
        let yourScore = document.querySelector('.your-score');
        yourScore.innerHTML = score;
      }
    }

    requestAnimationFrame(function gameLoop() {
      ctx.clearRect(0, 0, 1200, 750);
      // createMissiles();
      drawMissiles();
      drawTargets();
      collisionDetect();
      animateMissiles();
      playerCollisionDetect();
      secondWave();
      requestAnimationFrame(gameLoop);
    });
    return this;
  }
}

module.exports = Game;
