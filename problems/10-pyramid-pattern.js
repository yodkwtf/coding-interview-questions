//* Write a function that accepts a positive number N. The function should console log a pyramid shape with N levels using the # character.  Make sure the pyramid has spaces on both the left *and* right hand sides.
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//# Base Solution
const pyramid = (n) => {
  for (let rowIndex = 0; rowIndex < n; rowIndex++) {
    let line = '';
    const midIndex = n - 1;

    for (let colIndex = 0; colIndex < 2 * n - 1; colIndex++) {
      const leftStartIndex = midIndex - rowIndex;
      const rightEndIndex = midIndex + rowIndex;

      if (colIndex >= leftStartIndex && colIndex <= rightEndIndex) {
        line += '#';
      } else {
        line += '_';
      }
    }

    console.log(line);
  }
};

pyramid(5);
