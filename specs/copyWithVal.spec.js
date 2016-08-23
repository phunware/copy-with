'use strict';
const { expect } = require('chai');
const copyWithVal = require('../src/copyWithVal');

describe('copyWithVal', function () {
  it('should modify a single value', function () {
    const before = { x: 1, y: 2 };
    const after = copyWithVal(before, 'y', 3);
    expect(after).to.deep.equal({ x: 1, y: 3 });
  });
});
