// returns all indices where each character in a string is found
const letterPositions = function(sentence) {
  const result = {};
  let counter = 0;
  for (let letter of sentence) {
    if (letter === " ") {
      counter++;
      continue;
    } else if (!result[letter]) {
      result[letter] = [counter];
      counter++;
    } else {
      result[letter].push(counter);
      counter++;
    }
  }
  return result;
};

module.exports = letterPositions;