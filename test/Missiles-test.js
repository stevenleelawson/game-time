const {expect, assert} = require('chai');
const Missiles = require('../lib/Missiles.js');
const GamePiece = require('../lib/GamePiece.js');

describe('Missiles', function() {
  it('should extend GamePiece', function() {
    var missiles = new Missiles(10, 10, 10, 10);

    assert.instanceOf(missiles, GamePiece);
  });
  it('should take x, y, targetX, targetY as arguments', function() {
    var missiles = new Missiles(10, 20, 40, 50);

    assert.equal(missiles.x, 10);
    assert.equal(missiles.y, 20);
    assert.equal(missiles.targetX, 40);
    assert.equal(missiles.targetY, 50);
  });

  it('should have a dx and dy of 0 as default', function() {
    var missiles = new Missiles();
    
    assert.equal(missiles.dx, 0);
    assert.equal(missiles.dy, 0);
  });

  it('should not have arrived as a default', function() {
    var missiles = new Missiles();

    assert.equal(missiles.hasArrived, false);
  });

  it('should have active missiles as a default', function() {
     var missiles = new Missiles();

     assert.equal(missiles.active, true);
  });

  it('should be no previous position to begin with', function() {
     var missiles = new Missiles();

     assert.deepEqual(missiles.previousPosition, []);
  });

  it('should be able to move', function() {
    var missiles = new Missiles(300, 450, 5, 5);
    missiles.dx = 1;
    missiles.dy = 1;
    missiles.move();

    assert.isBelow(missiles.x, 300);
    assert.isBelow(missiles.y, 450);
    assert.equal(missiles.hasArrived, true);
  });

  it('should have a new position', function() {
    var missiles = new Missiles();
    
    assert.deepEqual(missiles.previousPosition, []);
    missiles.move();
    assert.deepEqual(missiles.previousPosition.length, 1);
  });
});