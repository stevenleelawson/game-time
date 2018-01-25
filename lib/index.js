var Game = require('./Game.js');
var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');
// window.onload = function () {
//  new Game(ctx);
// }
var game = new Game(ctx);
game.update(ctx);