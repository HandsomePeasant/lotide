const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("does not alter the passed-in array", () => {
    const testArr = [1, 2, 3, 4, 5];
    const tailArr = tail(testArr);
    assert.strictEqual(testArr.length, 5);
  });

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("returns an empty array when passed an array with only one element", () => {
    assert.deepEqual(tail(["Test"]), []);
  });

  it("returns an empty array when passed an empty array", () => {
    assert.deepEqual(tail([]), []);
  });
});