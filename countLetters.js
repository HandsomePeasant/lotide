const countLetters = function(str) {
  const result = {};

  for (let letter of str) {
    if (letter === " " || letter === "," || letter === "." || letter === "'") {
      continue;
    } else if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }

  return result;
};

module.exports = countLetters;