const {expect, assert} = require('chai');
const PlayerMissile = require('../lib/PlayerMissile.js');


describe('PlayerMissile', function() {
  it('should be a function', function() {
    var playerMissile = new PlayerMissile();

    assert.isFunction(PlayerMissile);
  });

  it('should be an object', function() {
    var playerMissile = new PlayerMissile();

    assert.isObject(playerMissile);
  });

  it('should take an x and y as arguments', function() {
    var playerMissile = new PlayerMissile(2, 5);

    assert.equal(playerMissile.x, 2);
    assert.equal(playerMissile.y, 5);
  });

  it('should have a radius of 20 as default', function() {
    var playerMissile = new PlayerMissile();

    assert.equal(playerMissile.radius, 20);
  });

  it('should increase its radius after being animated', function() {
    var playerMissile = new PlayerMissile();

    assert.equal(playerMissile.radius, 20);

    playerMissile.animate();
    assert.isAbove(playerMissile.radius, 20);
  });
})