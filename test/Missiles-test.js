const chai = require('chai');
const assert = chai.assert;
const Missiles = require('../lib/Missiles.js');

describe('Missiles', function() {
  it('should be a function', function() {
    var missiles = new Missiles(10, 10, 10, 10);

    assert.instanceOf(missiles, Missiles);
  });
  it('should take x, y, targetX, targetY as arguments', function() {
    var missiles = new Missiles(10, 20, 40, 50);

    assert.equal(missiles.x, 10);
    assert.equal(missiles.y, 20);
    assert.equal(missiles.targetX, 40);
    assert.equal(missiles.targetY, 50);
  });
})
