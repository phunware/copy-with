'use strict';
const shallowEquals = require('shallow-equals');

module.exports = function firstIfSame(original, modified) {
  if (shallowEquals(original, modified)) {
    return original;
  } else {
    return modified;
  }
}
