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

  it('should start the game at a default level of 1', function() {
    var game = new Game();
    assert.equal(game.level, 1);
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

  it('should have arrived if a collision is detected', function() {
    var game = new Game();
    var missiles = new Missiles();

    assert.equal(missiles.hasArrived, false);
    game.collisionDetect();
    assert.equal(missiles.hasArrived, false);
  });

  it('should not exist after its been hit', function() {
    var game = new Game();
    var target = new Cities();

    assert.equal(target.exists, true);
    game.collisionDetect();
    assert.equal(target.exists, true);
  });

  it('should take missiles from the array when hit', function() {
    var game = new Game();
    var missiles = new Missiles();
    
    assert.deepEqual(game.missilesArray.length, 0);
  });
})