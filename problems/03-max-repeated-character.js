//* Given a string, return the character that has the most no. of occurrences in the string
// maxChar("Steve Reese") -> 'e'
// maxChar("12341111") -> '1'

const maxChar = (str) => {
  let strCount = {};
  let maxCountKey = null;
  let maxCountValue = 0;

  for (let i = 0; i < str.length; i++) {
    const curChar = str[i];

    if (curChar in strCount) {
      strCount[curChar] = strCount[curChar] + 1;
    } else {
      strCount[curChar] = 1;
    }

    if (strCount[curChar] > maxCountValue) {
      maxCountKey = curChar;
      maxCountValue = strCount[curChar];
    }
  }

  return maxCountKey;
};

const value = maxChar('abbccccddd');
console.log(value);
