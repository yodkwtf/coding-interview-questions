//* Write a function that accepts a positive number N. The function should console log a step shape with N levels using the # character.  Make sure the step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//# Basic solution
const stepsBasic = (n) => {
  let line = '';

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      line += '#';
    }
    console.log(line);
    line = '';
  }
};

//# Complete solution
const stepsWithSpaces = (n) => {
  for (let i = 1; i <= n; i++) {
    let line = '';

    for (let j = 1; j <= n; j++) {
      line += j <= i ? '#' : ' ';
    }

    console.log(line);
  }
};

stepsWithSpaces(5);
