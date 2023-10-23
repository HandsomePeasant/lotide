const assertArraysEqual = require('../assertArraysEqual');

// Test code
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Identical arrays, should pass
assertArraysEqual(["1", "2", "3"], [1, 2, 3]); // Arrays with the same elements in different types, should fail
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // Arrays of different length, should fail