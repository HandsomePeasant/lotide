const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// Test code using assertEqual function with various arrays and the expected result -- all test code should return Assertion Passed
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // testing identical arrays
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // testing arrays with the same elements, but in different order
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // testing arrays with strings
assertEqual(eqArrays(["1", "2", "3"], [1, 2, 3]), false); // testing one array with strings vs one array with the number representations of the same strings
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // testing arrays of different length