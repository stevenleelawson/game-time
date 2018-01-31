const chai = require('chai');
const assert = chai.assert;
const Towers = require('../lib/Towers.js');

describe('Towers', function() {
  it('should be a function', function(){
    var tower = new Towers(10, 20, 30, 40)
    assert.instanceOf(tower, Towers);
  });

  it('should take x, y, width, and height as arguments', function() {
     var tower = new Towers(10, 20, 50, 40);

     assert.equal(tower.x, 10);
     assert.equal(tower.y, 20);
     assert.equal(tower.width, 50);
     assert.equal(tower.height, 40);
  });
  it('should exist', function() {
     var tower = new Towers(10, 20, 50, 40);

     assert.equal(tower.exists, true);

  });
})
