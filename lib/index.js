// var Missiles = require('./Missiles.js')
var Game = require('./Game.js');
var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');
var game = new Game(ctx);

requestAnimationFrame(function gameLoop(){
  
  requestAnimationFrame(gameLoop);
})



// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
