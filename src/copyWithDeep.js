'use strict';
const copyWith = require('./copyWith');

module.exports = function copyWithDeep(input, path, changes) {
  const firstKey = path[0];
  if (path.length === 0) {
    return copyWith(input, changes);
  }

  return copyWith(input, {
    [firstKey]: copyWithDeep(input[firstKey], path.slice(1), changes)
  })
}
