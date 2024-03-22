//* Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters in the same quantity. Only consider characters, not spaces or punctuation. Consider capital letters to be the same as lower case.
// --- Examples
//   anagrams('coding money', 'money coding') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const anagrams = (str1, str2) => {
  const text1 = str1.replace(/[^\w]/g, '').toLowerCase();
  const text2 = str2.replace(/[^\w]/g, '').toLowerCase();

  if (text1.length !== text2.length) {
    return false;
  }

  let charMap1 = {};
  for (let char in text1) {
    if (charMap1[char]) {
      charMap1[char] = charMap1[char] + 1;
    } else {
      charMap1[char] = 1;
    }
  }

  let charMap2 = {};
  for (let char in text2) {
    if (charMap2[char]) {
      charMap2[char] = charMap2[char] + 1;
    } else {
      charMap2[char] = 1;
    }
  }

  for (let char in text1) {
    if (charMap1[char] !== charMap2[char]) {
      return false;
    }
  }

  return true;
};

// - Function Call
const result = anagrams('coding money', 'money coding');
console.log(result);
