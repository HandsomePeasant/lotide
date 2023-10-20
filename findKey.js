const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key]) === true) {
      return key;
    }
  }
};

test1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
assertEqual(test1, "noma");

test2 = findKey({
  1: { type: "thing" },
  2: { type: "stuff" },
  3: { type: "stuff" },
  4: { type: "test" },
  5: { type: "test" },
  6: { type: "test" }
}, x => x.type === "test") // => "4"
assertEqual(test2, "4");

test3 = findKey({
  1: { type: "thing" },
  2: { type: "stuff" },
  3: { type: undefined },
  4: { type: "test" },
  5: { type: "test" },
  6: { type: "test" }
}, x => x.type === "test") // => "4"
assertEqual(test3, "4");

test4 = findKey({
  1: { type: "thing" },
  2: { type: "stuff" },
  3: { type: undefined },
  4: { type: "test" },
  5: { type: "test" },
  6: { type: "test" }
}, x => x.type === undefined) // => "3"
assertEqual(test4, "3");