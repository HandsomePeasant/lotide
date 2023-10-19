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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

const test1 = [10, 20, 30, 40, 50];
const testResults1 = map(test1, element => element / 2);
assertArraysEqual(testResults1, [5, 10, 15, 20, 25]);

const test2 = [true, false, true, false];
const testResults2 = map(test2, element => !element);
assertArraysEqual(testResults2, [false, true, false, true]);

const test3 = ["testing", "testing", "one", "two", "three"];
const testResults3 = map(test3, word => word[3]);
assertArraysEqual(testResults3, ['t', 't', undefined, undefined, 'e']);