//* Write a program that console logs the numbers from 1 to n but for each multiple of three print "fizz" instead of the number and for the multiples of 5 print "buzz". For numbers which are multiple of both three and five print "fizzbuzz".
// - Example
// fizzbuzz(5)
/**
 * 1
 * 2
 * fizz
 * 4
 * buzz
 */

//# For loop with switch statements
const fizzbuzz = (n) => {
  for (let count = 1; count <= n; count++) {
    switch (true) {
      case count % 3 === 0 && count % 5 === 0:
        console.log('fizzbuzz');
        break;
      case count % 3 === 0:
        console.log('fizz');
        break;
      case count % 5 === 0:
        console.log('buzz');
        break;
      default:
        console.log(count);
    }
  }
};

//# While loop
// const fizzbuzz = (n) => {
//   let counter = 1;

//   while (counter <= n) {
//     if (counter % 3 === 0 && counter % 5 === 0) {
//       console.log('fizzbuzz');
//     } else if (counter % 3 === 0) {
//       console.log('fizz');
//     } else if (counter % 5 === 0) {
//       console.log('buzz');
//     } else {
//       console.log(counter);
//     }
//     counter++;
//   }
// };

//# For loop
// const fizzbuzz = (n) => {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('fizzbuzz');
//       continue;
//     }

//     if (i % 3 === 0) {
//       console.log('fizz');
//       continue;
//     }

//     if (i % 5 === 0) {
//       console.log('buzz');
//       continue;
//     }

//     console.log(i);
//   }
// };

fizzbuzz(20);
