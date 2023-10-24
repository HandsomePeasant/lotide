// receives an object and a callback value, scans the object and returns
// the first key for which the callback returns a truthy value
const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key]) === true) {
      return key;
    }
  }
};

module.exports = findKey;