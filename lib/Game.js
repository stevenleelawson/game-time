// var GamePiece = require('./GamePiece.js');
var Missiles = require('./Missiles.js');
var Cities = require('./Cities.js');
var Towers = require('./Towers.js');
var PlayerMissile = require('./PlayerMissile.js');

class Game {
  constructor(ctx) {
    this.score = 0;
    this.level = 1;
    this.ctx = ctx;
    this.playerMissiles = [];
    this.missilesArray = [];
    this.gameOver = false;
    this.city1 = new Cities(240, 695, 50, 50);
    this.city2 = new Cities(340, 695, 50, 50);
    this.city3 = new Cities(440, 695, 50, 50);
    this.city4 = new Cities(740, 695, 50, 50);
    this.city5 = new Cities(840, 695, 50, 50);
    this.city6 = new Cities(940, 695, 50, 50);
    this.tower1 = new Towers(50, 650, 60, 100);
    this.tower2 = new Towers(600, 650, 60, 100);
    this.tower3 = new Towers(1100, 650, 60, 100);
    
    this.targetArray = [
      this.city1,
      this.city2,
      this.city3,
      this.city4,
      this.city5,
      this.city6,
      this.tower1,
      this.tower2,
      this.tower3
    ];
  }


  createExplosion(eventObject) {
    let explosion = new PlayerMissile(eventObject.x, eventObject.y);
    explosion.draw(this.ctx);
    this.playerMissiles.push(explosion);
    return this;
  }

  drawTargets(playerMissiles, score, level) {

    this.targetArray.forEach((target) => {
      target.draw(this.ctx);
    });
  }

  initialLevel() {
    let gameLevel = document.querySelector('.your-level');

    gameLevel.innerHTML = this.level;
  }

  createMissiles(velocity) {
    for (var i = 0; i < 9; i ++) {
      let targetIndex = Math.floor(Math.random() * this.targetArray.length);
        
      this.youLoseScreen();
      if (this.gameOver === false) { 
        let targetx = this.targetArray[targetIndex].x;
        let targety = this.targetArray[targetIndex].y;
        var x = Math.random() * innerWidth;
        var y = 0;
        var missiles = new Missiles(x, y, targetx, targety, this.ctx, velocity);

        this.missilesArray.push(missiles);
        }
      }
    }

  drawMissiles (ctx) {
    this.missilesArray.forEach(function (missile) {
      missile.move().draw();
    });
  }

  animateMissiles () {
    this.playerMissiles.forEach(function (missile, index) {
      if (missile.radius < 35) {
        missile.draw(ctx).animate();
      } else {
        missile.erase(ctx);
        this.playerMissiles.splice(index, 1)
      }
    });
  }

  collisionDetect () {
    this.targetArray.forEach( (target, i) => {
      this.missilesArray.forEach( (missile, j) => {
        let distance = GamePiece.calculateDistance(missile, target);

        if (distance < 10) {
          missile.hasArrived = true;
          target.active = false;
          this.targetArray.splice(i, 1);
          target.erase(ctx);
          this.missilesArray.splice(j, 1);
          missile.erase(ctx);
          target.exists = false;
        } else if (target.exists === false || missile.y === target.y) {
          missile.erase(ctx);
          this.missilesArray.splice(j, 1);
        }
      });
    });
  }

  playerCollisionDetect() {
    this.playerMissiles.forEach( (playerMissile, i) => {
      this.missilesArray.forEach( (missile, j) => {
        let distance = GamePiece.calculateDistance(missile, playerMissile);

        if (distance < playerMissile.radius) {
          missile.hasArrived = true;
          this.playerMissiles.splice(i, 1);
          playerMissile.erase(ctx);
          this.missilesArray.splice(j, 1);
          missile.erase(ctx);
        }
        this.updateScore(missile.hasArrived);
      });
    });
  }

  secondWave () {
    if (this.missilesArray.length === 0 || this.targetArray.length === 0) {
      this.level += 1;
      let gameLevel = document.querySelector('.your-level');

      gameLevel.innerHTML = this.level;
      this.createMissiles();
      this.createMissiles();
      this.drawMissiles();
    }
  }

  updateScore(missile) {
    if (missile) {
      score += 10;
      let yourScore = document.querySelector('.your-score');

      yourScore.innerHTML = score;
    }
  }

  youLoseScreen() {
    if (this.targetArray.length === 0) {
      gameOver = true;
      let youLoseScreen = document.querySelector('.loser');
      
      youLoseScreen.classList.remove('game-over');
    }
  }

  update(ctx, playerMissiles, score, level) {
      this.initialLevel();
      this.drawTargets();
      this.createMissiles();
      this.drawMissiles();
      this.animateMissiles();
      // this.createExplosion();
      this.collisionDetect();
      this.playerCollisionDetect();
      this.secondWave();
      this.updateScore();
      this.youLoseScreen();
    return this;
  }
}

module.exports = Game;
