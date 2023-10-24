const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("does not alter the passed-in array", () => {
    const testArr = [1, 2, 3, 4, 5];
    const middleArr = middle(testArr);
    assert.strictEqual(testArr.length, 5);
  });

  it("Returns a single element ('2') when passed an array with an odd number of elements ([1,2,3])", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns two elements ('2', '3') when passed an array with an even number of elements ([1,2,3,4])", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns an empty array when passed an array with only 2 elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns an empty array when passed an array with 1 element", () => {
    assert.deepEqual(middle([1]), []);
  });
});