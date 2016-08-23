'use strict';
const copyWith = require('./copyWith');

module.exports = function copyWithVal(base, key, value) {
  return copyWith(base, {
    [key]: value
  });
}
