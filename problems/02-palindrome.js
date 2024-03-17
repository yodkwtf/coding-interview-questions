//* Given a string, return true if the string is a palindrome

function palindrome(str) {
  let reversedStr = '';

  for (let i = 0; i < str.length; i++) {
    reversedStr = str[i] + reversedStr;
  }

  return str === reversedStr;
}

console.log(palindrome('kayak'));
console.log(palindrome('yodkwtf'));
console.log(palindrome('madam'));
