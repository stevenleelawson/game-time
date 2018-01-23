var Missiles = require('./Missiles.js')
var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

var missiles = new Missiles(50, 50, 50, 50);

missiles.draw(ctx);

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
