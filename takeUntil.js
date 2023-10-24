// returns items from a passed-in array until the specified callback returns
// a truthy value
const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item) === true) {
      break;
    }
    results.push(item);
  }
  return results;
};

module.exports = takeUntil;