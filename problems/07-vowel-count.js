//* Write a function that returns the number of vowels used in a string. Vowels are the characters 'a', 'e', 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('How are you?') --> 5
//   vowels('Coding Money') --> 4
//   vowels('why?') --> 0

const vowels = (str) => {
  const vowelList = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = 0;

  for (let char of str.toLowerCase()) {
    vowelList.includes(char) && vowelCount++;
  }

  return vowelCount;
};

// - Function Call
const result = vowels('How are yoU?');
console.log(result);
