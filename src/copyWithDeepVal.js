'use strict';
const copyWithDeep = require('./copyWithDeep');

module.exports = function copyWithDeepVal(input, keys, value) {
  return copyWithDeep(input, keys.slice(0, -1), {
    [keys[keys.length - 1]]: value
  });
}
