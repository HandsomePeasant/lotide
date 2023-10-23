const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test code 1: ensuring the initial array has not been altered
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

// Test code 2: checking individual returned elements
const words2 = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(words2.length, 2); // ensuring only two elements have been returned
assertEqual(words2[0], "Lighthouse"); // checking the first element
assertEqual(words2[1], "Labs"); // checking second element

// Test code 3: checking the results of entering an array with one element -- should return an empty array
const test3 = tail(["RemoveMe"]);
assertEqual(test3.length, 0);

// Test code 4: checking the results of entering an empty array -- should again return an empty array
const test4 = tail([]);
assertEqual(test4.length, 0);