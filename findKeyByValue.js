const findKeyByValue = function(obj, val) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  for (let index = 0; index < values.length; index++) {
    if (values[index] === val) {
      return keys[index];
    }
  }
};

module.exports = findKeyByValue;