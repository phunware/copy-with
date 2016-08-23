'use strict';
const { expect } = require('chai');
const copyWithDeep = require('../src/copyWithDeep');

describe('copyWithDeep', function () {
  it('should make deep changes', function() {
    const before = { x: { y: { z: 1 } } };
    const after = copyWithDeep(before, ['x', 'y'], { w: 2 });
    expect(after).to.deep.equal({ x: { y: { z: 1, w: 2 } } });
  });
});
