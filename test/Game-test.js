const chai = require('chai');
const assert = chai.assert;
const Game = require('../lib/Game.js');

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

  it('player should start with no missiles', function() {
    var game = new Game();
    assert.deepEqual(game.playerMissiles, []);
  });
});