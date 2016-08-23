'use strict';
const { expect } = require('chai');
const firstIfSame = require('../src/firstIfSame');

describe('firstIfSame', function () {
  it('should return the first item if they are shallow-equal', function() {
    const before = { x: 1, y: 2 };
    expect(firstIfSame(before, { x: 1, y: 2 })).to.equal(before);
  });

  it('should return the second item if they are different', function() {
    const before = { x: 1, y: 2 };
    const after = { x: 2, y: 2 };
    expect(firstIfSame(before, after)).to.equal(after);
  });

  it('should behave in a real world scenario with arrays', function () {
    const before = ['one', 'two', 'three'];
    const after = before.map(s => s.toUpperCase());
    expect(firstIfSame(before, after)).to.equal(after);

    const after2 = before.map(s => s.toLowerCase());
    expect(firstIfSame(before, after2)).to.equal(before);
  })
});
