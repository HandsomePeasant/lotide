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
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


const letterPositions = function(sentence) {
  const result = {};
  let counter = 0;
  for (let letter of sentence) {
    if (letter === " ") {
      counter++;
      continue;
    } else if (!result[letter]) {
      result[letter] = [counter];
      counter++;
    } else {
      result[letter].push(counter);
      counter++;
    }
  }
  return result;
};


assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("I am testing").t, [5, 8]);
assertArraysEqual(letterPositions("Test").T, [0]);