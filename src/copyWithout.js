'use strict';
const objectAssign = require('object-assign');

module.exports = function without(base, ...keysToRemove) {
  // If you don't need to remove any keys, keep referential equality
  if (!keysToRemove.some(k => k in base)) {
    return base;
  }

  // Make a shallow copy
  const result = objectAssign({}, base);
  // Delete keys from it
  keysToRemove.forEach(k => {
    delete result[k];
  });
  return result;
}
