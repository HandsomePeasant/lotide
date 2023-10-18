const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(str) {
  const result = {};
  const lowerStr = str.toLowerCase();

  for (let letter of lowerStr) {
    if (letter === " " || letter === "," || letter === "." || letter === "'") {
      continue;
    } else if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }

  return result;
};



const test = countLetters("I'm testing, and stuff.");
assertEqual(test.i, 2);
assertEqual(test["'"], undefined);
assertEqual(test[" "], undefined);
assertEqual(test.t, 3);