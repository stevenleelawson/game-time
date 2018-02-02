const chai = require('chai');
const assert = chai.assert;
const GamePiece = require('../lib/GamePiece.js');
const Cities = require('../lib/Cities.js');

describe('Cities', function() {
  it('should extend GamePiece', function() {
    var cities = new Cities();

    assert.instanceOf(cities, GamePiece);
  });

  it('should take x, y, width, and height as arguments', function() {
    var cities = new Cities(300, 450, 50, 100);

    assert.equal(cities.x, 300);
    assert.equal(cities.y, 450);
    assert.equal(cities.width, 50);
    assert.equal(cities.height, 100);
  });

  it('should exist as a default', function() {
    var cities = new Cities();

    assert.equal(cities.exists, true);
  });

  it('should not have arrived as a default', function () {
    var cities = new Cities();

    assert.equal(cities.hasArrived, false);
  });

  it('should be active as a default', function () {
    var cities = new Cities();

    assert.equal(cities.active, true);
  });
})