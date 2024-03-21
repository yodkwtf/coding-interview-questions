//* Write a function that accepts a string.  The function should capitalize the first letter of each word in the string thenreturn the capitalized string.
// --- Examples
// capitalize('this is durgesh from yodkwtf academy')
// > 'This Is Durgesh FromYodkwtf Academy'
// capitalize('what is title case?')
// > 'What Is Title Case?'
// capitalize('titles of books, movies, songs, plays and other works')
// > 'Titles Of Books, Movies, Songs, Plays And Other Works'

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

const result = capitalize('this is durgesh from yodkwtf academy');
console.log(result);
