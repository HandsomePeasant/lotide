// Function will accept two arrays and return a third that includes
// all elements of source NOT included in itemsToRemove
const without = function(source, itemsToRemove) {
  const result = [];
  for (let x = 0; x < source.length; x++) {
    let addVal = true;
    for (let y = 0; y < itemsToRemove.length; y++) {
      if (source[x] === itemsToRemove[y]) {
        addVal = false;
        break;
      }
    }
    if (addVal) {
      result.push(source[x]);
    }
  }
  return result;
};

module.exports = without;