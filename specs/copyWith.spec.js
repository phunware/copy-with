'use strict';
const { expect } = require('chai');
const copyWith = require('../src/copyWith');

describe('copyWith', function () {
  it('should add a property', function() {
    const before = { x: 1 };
    const after = copyWith(before, { y: 2 });
    expect(after).to.deep.equal({ x: 1, y: 2 });
  });

  it('should change a property', function() {
    const before = { x: 1 };
    const after = copyWith(before, { x: 2 });
    expect(after).to.deep.equal({ x: 2 });
  });

  it('should return referentially equal object if value not changed', function() {
    const before = { x: 1 };
    const after = copyWith(before, { x: 1 });
    expect(before).to.equal(after);

    const beforeMultiple = { x: 1, y: 2 };
    const afterMultiple = copyWith(beforeMultiple, { x: 1 });
    expect(beforeMultiple).to.equal(afterMultiple);
  });
});
