// Function will return the middle element(s) of an array
const middle = function(array) {
  let num = 0;
  const newArray = [];
  if (array.length <= 2) { // If user enters an array of only one or two elements, there is no middle element and we immediately return an empty array
    return newArray;
  }

  if (array.length % 2 !== 0) {
    num = Math.floor(array.length / 2);
    newArray.push(array[num]);
    return newArray;
  } else {
    num = ((array.length / 2) - 1);
    newArray.push(array[num]);
    newArray.push(array[num + 1]);
    return newArray;
  }
};

module.exports = middle;