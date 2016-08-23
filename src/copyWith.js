'use strict';
const objectAssign = require('object-assign');

module.exports = function copyWith(base, changes) {
  // First check that any changes even need to happen
  const hasChanges = Object.keys(changes)
    .some(k => changes[k] !== base[k]);
  if (hasChanges) {
    return objectAssign({}, base, changes);
  }
  return base;
}
