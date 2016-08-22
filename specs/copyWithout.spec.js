'use strict';
const { expect } = require('chai');
const copyWithout = require('../src/copyWithout');

describe('copyWithout', function () {
  it('should remove keys', function() {
    const before = { x: 1, y: 2 };
    const after = copyWithout(before, 'y');
    expect(after).to.deep.equal({ x: 1 });

    const beforeMultiple = { x: 1, y: 2, z: 3 };
    const afterMultiple = copyWithout(beforeMultiple, 'y', 'z');
    expect(afterMultiple).to.deep.equal({ x: 1 });
  });


  it('should return referentially equal object if key does not exist', function() {
    const before = { x: 1, y: 2 };
    const after = copyWithout(before, 'z');
    expect(before).to.equal(after);

    const beforeMultiple = { x: 1 };
    const afterMultiple = copyWithout(beforeMultiple, 'y', 'z');
    expect(beforeMultiple).to.equal(afterMultiple);
  });
});
