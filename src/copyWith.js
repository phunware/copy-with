'use strict';
const objectAssign = require('object-assign');

module.exports = function copyWith(base, changes) {
  // First check that any extension even needs to happen
  let equal = true;
  for (const k of Object.keys(changes)) {
    const v = changes[k];
    if (changes[k] !== base[k]) {
      return objectAssign({}, base, changes);
    }
  }
  return base;
}
