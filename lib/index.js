var Missile = require('./Missile.js')
var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

var missile = new Missile(50, 50, 50, 50);

missile.draw(ctx);

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
