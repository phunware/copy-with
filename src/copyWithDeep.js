'use strict';
const copyWith = require('./copyWith');

module.exports = function copyWithDeep(base, keys, changes) {
  const firstKey = keys[0];
  if (keys.length === 0) {
    return copyWith(base, changes);
  }

  return copyWith(base, {
    [firstKey]: copyWithDeep(base[firstKey], keys.slice(1), changes)
  })
}
