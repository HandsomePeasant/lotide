const eqArrays = require('./eqArrays');

// Function will print pass or fail message to console depending on the result returned by the eqArrays function
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;