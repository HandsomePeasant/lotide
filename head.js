// Function for determining if two entered values are the same
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function for returning the first element of an array
const head = function(arr) {
  return arr[0];
}

// Test code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1, 2, 3]), "One");
assertEqual(head(["one", "two", "three"]), 1);
assertEqual(head([1]), 1);
assertEqual(head([]), undefined);