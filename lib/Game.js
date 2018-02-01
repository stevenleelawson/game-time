var GamePiece = require('./GamePiece.js');
var Missiles = require('./Missiles.js');
var Cities = require('./Cities.js');
var Towers = require('./Towers.js');
var PlayerMissile = require('./PlayerMissile.js');

class Game {
  constructor(ctx) {
    this.score = 0;
    this.level = 1;
    this.ctx = ctx
    this.playerMissiles = [];
  }

  createExplosion(eventObject) {
    let explosion = new PlayerMissile(eventObject.x, eventObject.y);

    explosion.draw(this.ctx);
    this.playerMissiles.push(explosion);
    return this;
  }

  update(ctx, playerMissiles, score, level) {
    var gameOver = false;
    var city1 = new Cities(240, 695, 50, 50);
    var city2 = new Cities(340, 695, 50, 50);
    var city3 = new Cities(440, 695, 50, 50);
    var city4 = new Cities(740, 695, 50, 50);
    var city5 = new Cities(840, 695, 50, 50);
    var city6 = new Cities(940, 695, 50, 50);
    var tower1 = new Towers(50, 650, 60, 100);
    var tower2 = new Towers(600, 650, 60, 100);
    var tower3 = new Towers(1100, 650, 60, 100);

    let targetArray = [
      city1,
      city2,
      city3,
      city4,
      city5,
      city6,
      tower1,
      tower2,
      tower3
    ];

    function drawTargets() {
      targetArray.forEach((target) => {
        target.draw(ctx);
      })
    }

    function initialLevel() {
      let gameLevel = document.querySelector('.your-level');

      gameLevel.innerHTML = level;
    }

    var missilesArray = [];

    function createMissiles(velocity) {
      for (var i = 0; i < 9; i ++) {
        let targetIndex = Math.floor(Math.random() * targetArray.length);
        
        youLoseScreen();
        if (gameOver === false) { 
          let targetx = targetArray[targetIndex].x;
          let targety = targetArray[targetIndex].y;
          var x = Math.random() * innerWidth;
          var y = 0;
          var missiles = new Missiles(x, y, targetx, targety, ctx, velocity);

          missilesArray.push(missiles);
        }
      }
    }
    createMissiles();
    initialLevel();

    function drawMissiles () {
      missilesArray.forEach(function (missile) {
        missile.move().draw(ctx);
      });
    }

    function animateMissiles () {
      playerMissiles.forEach(function (missile, index) {
        if (missile.radius < 35) {
          missile.draw(ctx).animate();
        } else {
          missile.erase(ctx);
          playerMissiles.splice(index, 1)
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
            target.exists = false;
          } else if (target.exists === false ||       missile.y === target.y) {
            missile.erase(ctx);
            missilesArray.splice(j, 1);
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
      if (missilesArray.length === 0 || targetArray.length === 0) {
        level += 1;
        let gameLevel = document.querySelector('.your-level');

        gameLevel.innerHTML = level;
        createMissiles();
        createMissiles();
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

    function youLoseScreen() {
      if (targetArray.length === 0) {
        gameOver = true;
        let youLoseScreen = document.querySelector('.loser');
        
        youLoseScreen.classList.remove('game-over');
      }
    }

    requestAnimationFrame(function gameLoop() {
      ctx.clearRect(0, 0, 1200, 750);
      drawTargets();
      drawMissiles();
      collisionDetect();
      animateMissiles();
      playerCollisionDetect();
      secondWave();
      if (gameOver === false) {
        requestAnimationFrame(gameLoop); 
      }
    });
    return this;
  }
}

module.exports = Game;
