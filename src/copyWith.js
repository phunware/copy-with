'use strict';
const objectAssign = require('object-assign');

module.exports = function copyWith(input, changes) {
  // First check that any changes even need to happen
  const hasChanges = Object.keys(changes)
    .some(k => changes[k] !== input[k]);
  if (hasChanges) {
    return objectAssign({}, input, changes);
  }
  return input;
}
