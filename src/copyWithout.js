'use strict';
const objectAssign = require('object-assign');

module.exports = function without(base, ...keysToRemove) {
  // If you don't need to remove any keys, keep referential equality
  if (!keysToRemove.some(k => k in base)) {
    return base;
  }

  const result = objectAssign({}, base);
  for (const k of keysToRemove) {
    delete result[k];
  }
  return result;
}
