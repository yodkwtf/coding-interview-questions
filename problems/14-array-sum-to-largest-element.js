//* Write a function that takes an array of numbers and checks whether the biggest number is equal to the sum of all the remaining digits.
// - Examples
//   arraySumToLargest([1, 2, 3, 4]) => false // 4 != 1 + 2 + 3
//   arraySumToLargest([1, 2, 3, 6]) => true // 6 == 1 + 2 + 3
//   arraySumToLargest([1, 2, 3, 10]) => false // 10 != 1 + 2 + 3
//   arraySumToLargest([1, 2, 3, 100]) => false // 100 != 1 + 2 + 3
//   arraySumToLargest([1, 2, 3, 1, 7]) => true // 7 == 1 + 2 + 3 + 1

const arraySumToLargest = (arr) => {
  let biggestNum = arr[0];
  let totalSum = 0;

  // find biggest num
  for (let n of arr) {
    if (n > biggestNum) {
      biggestNum = n;
    }
    totalSum += n;
  }

  const sumWithoutLargestNum = totalSum - biggestNum;
  return biggestNum === sumWithoutLargestNum;
};

console.log(arraySumToLargest([1, 2, 3, 17, 1, 10]));
