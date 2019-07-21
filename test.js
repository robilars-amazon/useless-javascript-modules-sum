const assert = require('assert');
const sum = require('./index')


assert.strictEqual(sum([1,2,3,4]), 10,'is of 1,2,3,4 does not equal 10')

assert.strictEqual(sum([1.1,2.3,3.1,4.9]), 11.4,'is of 1.1,2.3,3.1,4.9 does not equal 11.4')

