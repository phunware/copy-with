'use strict';
const objectAssign = require('object-assign');

module.exports = function without(base, ...keys) {
  // If you don't need to remove any keys, keep referential equality
  if (!keys.some(k => k in base)) {
    return base;
  }

  // Make a shallow copy
  const result = objectAssign({}, base);
  // Delete keys from it
  keys.forEach(k => {
    delete result[k];
  });
  return result;
}
