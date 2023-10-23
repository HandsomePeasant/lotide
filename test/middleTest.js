const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// Test code using assertArraysEqual to check returned array against expected result -- all tests should Pass
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// Testing to ensure arrays with 2 or fewer elements result in an empty array being returned
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);