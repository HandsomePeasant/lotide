const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  const element = arr.shift();
  return element;
}

// Test code

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1, 2, 3]), "One");
assertEqual(head(["one", "two", "three"]), 1);
assertEqual(head([1]), 1);
assertEqual(head([]), undefined);