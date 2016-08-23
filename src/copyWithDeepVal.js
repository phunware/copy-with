'use strict';
const copyWithDeep = require('./copyWithDeep');

module.exports = function copyWithDeepVal(base, keys, value) {
  return copyWithDeep(base, keys.slice(0, -1), {
    [keys[keys.length - 1]]: value
  });
}
