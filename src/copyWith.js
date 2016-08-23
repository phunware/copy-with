'use strict';
const objectAssign = require('object-assign');

module.exports = function copyWith(base, changes) {
  // First check that any extension even needs to happen
  const changeKeys = Object.keys(changes);
  for (var i = 0; i < changeKeys.length; i++) {
    const k = changeKeys[i];
    if (changes[k] !== base[k]) {
      // There's at least one difference between objects.
      return objectAssign({}, base, changes);
    }
  }
  return base;
}
