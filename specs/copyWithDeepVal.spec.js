'use strict';
const { expect } = require('chai');
const copyWithDeepVal = require('../src/copyWithDeepVal');

describe('copyWithDeepVal', function () {
  it('should deeply modify', function () {
    const before = { x: { y: { z: 1 } } };
    const after = copyWithDeepVal(before, ['x', 'y', 'z'], 2);
    expect(after).to.deep.equal({ x: { y: { z: 2 } } });
  });
});
