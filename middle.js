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

// Function will return the middle element(s) of an array
const middle = function(array) {
  let num = 0;
  const newArray = [];
  if (array.length <= 2) { // If user enters an array of only one or two elements, there is no middle element and we immediately return an empty array
    return newArray;
  }

  if (array.length % 2 !== 0) {
    num = Math.floor(array.length / 2);
    newArray.push(array[num]);
    return newArray;
  } else {
    num = ((array.length / 2) - 1);
    newArray.push(array[num]);
    newArray.push(array[num + 1]);
    return newArray;
  }

};


// Test code using assertArraysEqual to check returned array against expected result -- all tests should Pass
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// Testing to ensure arrays with 2 or fewer elements result in an empty array being returned
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
