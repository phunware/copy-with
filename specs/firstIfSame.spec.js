'use strict';
const { expect } = require('chai');
const firstIfSame = require('../src/firstIfSame');

describe('firstIfSame', function () {
  it('should return the first item if they are shallow-equal', function() {
    const before = { x: 1, y: 2 };
    expect(before).to.equal(firstIfSame(before, { x: 1, y: 2 }));
  });

  it('should return the second item if they are different', function() {
    const before = { x: 1, y: 2 };
    const after = { x: 2, y: 2 };
    expect(after).to.equal(firstIfSame(before, after));
  });
});
