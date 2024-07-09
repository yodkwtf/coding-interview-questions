// * Write a function that takes a string as an argument and returns the longest word in the string.
// --- Examples
//   longestWord("Hello there") === "Hello"
//   longestWord("My name is") === "name"
//   longestWord("I love JavaScript") === "JavaScript"
//   longestWord("I love JavaScript and Python") === "JavaScript"

const getLongestWord = (str) => {
  let longestWord = '';
  const strArr = str.split(' ');

  for (let word of strArr) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
};

// # function call
const result1 = getLongestWord('Hello there');
const result2 = getLongestWord('My name is');
const result3 = getLongestWord('I love JavaScript');
const result4 = getLongestWord('I love JavaScript and Python');

console.log({ result1 });
console.log({ result2 });
console.log({ result3 });
console.log({ result4 });
