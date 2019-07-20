const assert = require('assert');
const sum = require('./index')


assert.strictEqual(sum([1,2,3,4]), 10,'is of 1,2,3,4 does not equal 10')
