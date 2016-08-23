'use strict';
const copyWith = require('./copyWith');

module.exports = function copyWithVal(input, key, value) {
  return copyWith(input, {
    [key]: value
  });
}
