'use strict';
const objectAssign = require('object-assign');

module.exports = function copyWith(base, changes) {
  // First check that any extension even needs to happen
  for (const k of Object.keys(changes)) {
    if (changes[k] !== base[k]) {
      // There's at least one difference between objects.
      return objectAssign({}, base, changes);
    }
  }
  return base;
}
