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
  it('should have a draw method that takes an argument of ctx', function() {
    var gamePiece = new GamePiece(10, 20, 50, 40);

    var ctx = context;


    assert.equal(gamePiece.draw(ctx), true)
  })
})

// it('should say sparklying stuff', function() {
//     var unicorn = new Unicorn('Brenna');
//     assert.equal(unicorn.says('Wonderful!'), '**;* Wonderful! *;**');
//     assert.equal(unicorn.says('Batman has a great smile'), '**;* Batman has a great smile *;**');
//   });
// draw(ctx) {
//     ctx.fillStyle = '#C2C6D8';
//     ctx.fillRect(this.x, this.y, this.width, this.height)
//     return this;
// }
// it('should be a function', function () {
//     assert.isFunction(Unicorn);
//   });
