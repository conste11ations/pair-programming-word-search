const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  let verticalJoin;
  let result = false;
  for (let array = 0; array < horizontalJoin.length; array++) {
    if (horizontalJoin[array].includes(word)) {
      result = true;
    }
  }
  for (let firstArray = 0; firstArray < letters.length; firstArray++) {
    for (let secondArray = 0; secondArray < letters[firstArray].length; secondArray++) {
      if (letters[secondArray][firstArray] !== undefined) {
        verticalJoin += letters[secondArray][firstArray];
        if (verticalJoin.includes(word)) {
          result = true;
        }
      }
    }
  }
  return result;
};

module.exports = wordSearch;