var Game = require('./Game.js');
var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');
var game = new Game(ctx);

let startButton = document.querySelector('.start-button');

startButton.addEventListener('click', startGame);
canvas.addEventListener('click', playerClick);

function startGame() {
  let welcomeScreen = document.querySelector('.welcome-screen');
  
  welcomeScreen.classList.add('start-game');
  game.update(ctx, game.score);
  gameLoop();
}

function playerClick(event) {
  let mouse = {

    x: event.offsetX,
    y: event.offsetY
  }

  game.createExplosion(mouse);
}

function gameLoop() {
  ctx.clearRect(0, 0, 1200, 750);
  game.drawMissiles();
  game.drawTargets();
  game.animateMissiles(ctx);
  game.collisionDetect(ctx);
  game.playerCollisionDetect(ctx);
  game.secondWave();

  if (game.gameOver === false) {
    requestAnimationFrame(gameLoop); 
  }
}


  

