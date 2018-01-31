const chai = require('chai');
const assert = chai.assert;
const Game = require('../lib/Cities.js');

describe('Cities', function(){
  it('should be an instance of GamePiece', function() {
    // var cities = new Cities.GamePiece;
  });

  it('should exist as a default', function() {
    var cities = new Cities.GamePiece;
    assert.equal(cities.exists, true)
  });

});