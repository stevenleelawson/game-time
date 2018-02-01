const chai = require('chai');
const assert = chai.assert;
const GamePiece = require('../lib/GamePiece.js');

describe('GamePiece', function(){
  it('should be a function', function(){
    assert.isFunction(GamePiece);
  });

  it('should take x, y, width, and height as arguments', function() {
     var gamePiece = new GamePiece(10, 20, 50, 40);

     assert.equal(gamePiece.x, 10);
     assert.equal(gamePiece.y, 20);
     assert.equal(gamePiece.width, 50);
     assert.equal(gamePiece.height, 40);
  }); 
});

