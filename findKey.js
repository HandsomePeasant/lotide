const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key]) === true) {
      return key;
    }
  }
};

module.exports = findKey;