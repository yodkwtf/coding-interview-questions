// * Write a function that takes a string and returns the first word with the greatest number of repeated characters.
// --- Examples
// maxRepeatedCharacters("Hello there") === "Hello" // 'l' is repeated 2 times
// maxRepeatedCharacters("The temperature is hot") === "temperature" // 'e' is repeated 3 times
// maxRepeatedCharacters("What a pretty day") === "pretty" // 't' is repeated 2 times

const maxRepeatedCharacters = (str) => {
  let targetWord;
  let currentWordMap = {};
  let mostRepeatedCharCount = 0;

  const words = str.split(' ');

  for (let word of words) {
    // track letters and their count
    for (let letter of word) {
      if (currentWordMap[letter]) {
        currentWordMap[letter] += 1;
      } else {
        currentWordMap[letter] = 1;
      }
    }

    // find most repeated char in each word and save it's count
    for (let key in currentWordMap) {
      let value = currentWordMap[key];
      if (value > mostRepeatedCharCount) {
        mostRepeatedCharCount = value;
        targetWord = word;
      }
    }

    // reset word map
    currentWordMap = {};
  }

  return targetWord;
};

console.log(maxRepeatedCharacters('Hello there'));
console.log(maxRepeatedCharacters('The temperature is hot'));
console.log(maxRepeatedCharacters('What a pretty day'));
console.log(maxRepeatedCharacters('AAA BB ABCCBACBA CCCC D EEE FFFF'));
