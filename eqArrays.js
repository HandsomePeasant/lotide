// Function for determining if two entered values are the same
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function will compare two arrays and return true or false depending on if they are exactly identical
const eqArrays = function(arr1, arr2) {
  if (arr1.length != arr2.length) { // Immediately return false if arrays are of different length
    return false;
  }

  for (let x = 0; x < arr1.length; x++) { // Loop to iterate through each element of both arrays and return false if it finds a pair that does not match
    if (arr1[x] !== arr2[x]) {
      return false;
    }
  }
  return true; // If the loop completes, the arrays match and we can return true
}

// Test code using assertEqual function with various arrays and the expected result -- all test code should return Assertion Passed
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // testing identical arrays
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // testing arrays with the same elements, but in different order
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // testing arrays with strings
assertEqual(eqArrays(["1", "2", "3"], [1, 2, 3]), false); // testing one array with strings vs one array with the number representations of the same strings
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // testing arrays of different length