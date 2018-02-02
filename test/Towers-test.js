const {expect, assert} = require('chai');
const Towers = require('../lib/Towers.js');
const GamePiece = require('../lib/GamePiece.js');

describe('Towers', function() {
  it('should extend GamePiece', function(){
    var tower = new Towers(10, 20, 30, 40)
    assert.instanceOf(tower, GamePiece);
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
