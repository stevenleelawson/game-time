var Game = require('./Game.js');
var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');
// window.onload = function () {
//  new Game(ctx);
// }

let startButton = document.querySelector('.start-button');

startButton.addEventListener('click', startGame);

function startGame() {
  let welcomeScreen = document.querySelector('.welcome-screen');
  welcomeScreen.classList.add('start-game');
  var game = new Game(ctx);
  game.update(ctx);
  console.log(welcomeScreen);
}
