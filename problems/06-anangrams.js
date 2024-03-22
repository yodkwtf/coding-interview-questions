//* Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters in the same quantity. Only consider characters, not spaces or punctuation. Consider capital letters to be the same as lower case.
// --- Examples
//   anagrams('coding money', 'money coding') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// #Basic
const anagrams = (str1, str2) => {
  const text1 = str1.replace(/[^\w]/g, '').toLowerCase();
  const text2 = str2.replace(/[^\w]/g, '').toLowerCase();

  if (text1.length !== text2.length) {
    return false;
  }

  let charMap1 = {};
  for (let char of text1) {
    if (charMap1[char]) {
      charMap1[char] = charMap1[char] + 1;
    } else {
      charMap1[char] = 1;
    }
  }

  let charMap2 = {};
  for (let char of text2) {
    if (charMap2[char]) {
      charMap2[char] = charMap2[char] + 1;
    } else {
      charMap2[char] = 1;
    }
  }

  for (let char of text1) {
    if (charMap1[char] !== charMap2[char]) {
      return false;
    }
  }

  return true;
};

// # Optimized
function textCleanup(str) {
  return str.replace(/[^\w]/g, '').toLowerCase();
}

function strToCharMap(str) {
  let charMap = {};
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
    // firstTime -> charMap[char] + 1 = undefined + 1 = NaN (falsy)
  }
  return charMap;
}

const optimizedAnagrams = (str1, str2) => {
  // cleanup
  const text1 = textCleanup(str1);
  const text2 = textCleanup(str2);

  if (text1.length !== text2.length) return false;

  // convert to char map
  const charMap1 = strToCharMap(text1);
  const charMap2 = strToCharMap(text2);

  // compare both maps
  for (let char in charMap1) {
    if (charMap1[char] !== charMap2[char]) return false;
  }

  return true;
};

// # Short
function sortStr(str) {
  return str.split('').sort().join('');
}

const shortAnagrams = (str1, str2) => {
  // cleanup
  const text1 = textCleanup(str1);
  const text2 = textCleanup(str2);

  // convert to sorted string
  const sortedText1 = sortStr(text1);
  const sortedText2 = sortStr(text2);

  return sortedText1 === sortedText2;
};

// # Shortest
const shortestAnagrams = (str1, str2) => {
  return (
    str1.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('') ===
    str2.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
  );
};

// - Function Call
const result = shortestAnagrams('coding money', 'money coding');
console.log(result);
