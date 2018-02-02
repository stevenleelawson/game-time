const {expect, assert} = require('chai');
const Game = require('../lib/Game.js');
const Missiles = require('../lib/Missiles.js');
const Cities = require('../lib/Cities.js');
const Towers = require('../lib/Towers.js');
const PlayerMissile = require('../lib/PlayerMissile.js');


describe('Game', function(){
  it('should be a function', function() {
    assert.isFunction(Game);
  });

  it('should begin game with a score of 0', function() {
    var game = new Game();
    assert.equal(game.score, 0);
    });

  it('should begin game at level 1', function() {
   var game = new Game();
   assert.equal(game.level, 1);
  });

  it('should have a context', function() {
    var game = new Game();
    assert.equal(game.ctx);
  });

  it('there should be no player missiles and there should be no missiles in the missiles array', function() {
    var game = new Game();
    assert.deepEqual(game.playerMissiles, []);
    assert.deepEqual(game.missilesArray, [])
  });

  it('should have game over property of false as default', function() {
    var game = new Game();
    assert.equal(game.gameOver, false);
  });

  it.skip('Game should be able to create explosions', function() {
    var game = new Game();
    var x = 50;
    var y = 50;
    var explosions = new PlayerMissile(x, y);
    game.createExplosion(x,y);

    assert.deepEqual(game.playerMissiles.length, 1);
  });

  it('should start the game at a default level of 1', function() {
    var game = new Game();
    assert.equal(game.level, 1);
  });

  it.skip('should be 9 missiles in the missiles array', function(){
    var game = new Game();
    var missiles = new Missiles();
    var targetx = 240;
    var targety = 695;
    var x = 10;
    var y = 10;
    // var innerWidth = innerWidth;

    assert.deepEqual(game.missilesArray.length, 0);

    game.createMissiles();

    assert.deepEqual(game.missilesArray.length, 9);

  });

  it('')


});