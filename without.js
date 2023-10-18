// Function will compare two arrays and return true or false depending on if they are exactly identical
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) { // Immediately return false if arrays are of different length
    return false;
  }

  for (let x = 0; x < arr1.length; x++) { // Loop to iterate through each element of both arrays and return false if it finds a pair that does not match
    if (arr1[x] !== arr2[x]) {
      return false;
    }
  }
  return true; // If the loop completes, the arrays match and we can return true
};

// Function will print pass or fail message to console depending on the result returned by the eqArrays function
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// Function will accept two arrays and return a third that includes all elements of source NOT included in itemsToRemove
const without = function(source, itemsToRemove) {
  const result = [];
  for (let x = 0; x < source.length; x++) {
    let addVal = true;
    for (let y = 0; y < itemsToRemove.length; y++) {
      if (source[x] === itemsToRemove[y]) {
        addVal = false;
        break;
      }
    }
    if (addVal) {
      result.push(source[x]);
    }
  }
  return result;
}

// Test case specifically to ensure original array has not been modified
const testArr = ["Testing", 1, 2, 3];
without(testArr, "Testing");
assertArraysEqual(testArr, ["Testing", 1, 2, 3]);

// Test code using assertArraysEqual to compare returned result against expected result -- all tests should pass
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // Testing removing a single element where all elements are the same type
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // Testing with multiple element types
assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []); // Test if function correctly returns an empty array if entered arrays are identical
