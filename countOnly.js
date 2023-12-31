// receives an array of data, and an object that determines which items
// in the array will be counted
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item]++;
      } else {
        results[item] = 1;
    }
  }
}

  return results;
};

module.exports = countOnly;