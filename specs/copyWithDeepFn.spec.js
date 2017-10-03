'use strict';
const { expect } = require('chai');
const copyWithDeepFn = require('../src/copyWithDeepFn');

describe('copyWithDeepFn', function() {
  it('should make deep changes', function() {
    const before = { x: { y: { z: 1 } } };
    const after = copyWithDeepFn(before, ['x', 'y', 'z'], z => z + 1);
    expect(after).to.deep.equal({ x: { y: { z: 2 } } });
  });
  it('should return input if no changes', function() {
    const before = { x: { y: 1, z: 2 } };
    const after = copyWithDeepFn(before, ['x'], x => x);
    expect(after).to.equal(before);
  });
  it('should return input if output is equal', function() {
    const before = { x: { y: 1, z: 2 } };
    const after = copyWithDeepFn(before, ['x'], x => Object.assign({}, x));
    expect(after).to.equal(before);
  });
});
