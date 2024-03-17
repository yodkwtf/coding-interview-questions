//* Given a string, return a new string with the reversed order of characters

function reverse(str) {
  let reverseStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  return reverseStr;
}

console.log(reverse('hi'));
console.log(reverse('hello'));
console.log(reverse('yodkwtf'));

//* Given an integer, return a new integer with the reversed order of characters

function reverseInt(n) {
  return parseInt(reverse(n.toString())) * Math.sign(n);
}

// function reverseInt(n) {
//   const reversedNumInStr = reverse(n.toString());
//   return parseInt(n < 0 ? `-${reversedNumInStr}` : reversedNumInStr);
// }

// function reverseInt(num) {
//   const numInStr = `${num}`;
//   const reversedNumInStr = reverse(numInStr);
//   return parseInt(reversedNumInStr);
// }

console.log(reverseInt(26237));
console.log(reverseInt(4082001));
console.log(reverseInt(-101295));
