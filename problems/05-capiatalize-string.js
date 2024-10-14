//* Write a function that accepts a string. The function should capitalize the first letter of each word in the string then return the capitalized string.
// --- Examples
// capitalize('this is durgesh from yodkwtf academy')
// > 'This Is Durgesh FromYodkwtf Academy'
// capitalize('what is title case?')
// > 'What Is Title Case?'
// capitalize('titles of books, movies, songs, plays and other works')
// > 'Titles Of Books, Movies, Songs, Plays And Other Works'

//# Base
const capitalize = (text) => {
  const textArray = text.split(' ');
  const capitalizedTextArray = [];

  for (let word of textArray) {
    let capitalizedWord = '';
    for (let i = 0; i < word.length; i++) {
      i === 0
        ? (capitalizedWord = word[i].toUpperCase())
        : (capitalizedWord += word[i]);
    }

    capitalizedTextArray.push(capitalizedWord);
  }

  return capitalizedTextArray.join(' ');
};

// #Fancy
const fancyCapitalize = (text) => {
  const wordsArray = text.split(' ');

  const capWordsArray = wordsArray.map((word) => {
    return `${word[0].toUpperCase()}${word.slice(1)}`;
  });

  return capWordsArray.join(' ');
};

// #Fancier
const fancierCapitalize = (text) =>
  text
    .split(' ')
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(' ');

//- Function Call
const result = capitalize('what is title case?');
console.log(result);
