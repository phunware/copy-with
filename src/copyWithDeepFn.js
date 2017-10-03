'use strict';
const copyWith = require('./copyWith');

module.exports = function copyWithDeepFn(input, path, fn) {
  const firstKey = path[0];
  if (path.length === 1) {
    const value = input[firstKey];
    const newValue = fn(value);
    return copyWith(input, { [firstKey]: newValue });
  } else {
    return copyWith(input, {
      [firstKey]: copyWithDeepFn(input[firstKey], path.slice(1), fn),
    });
  }
};
