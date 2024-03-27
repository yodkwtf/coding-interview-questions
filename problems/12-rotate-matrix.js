//* Write a function that accepts a square matrix of size N x N and rotates it 90 degrees clockwise.
// --- Examples
//   rotateMatrix([
//     [1, 2],
//     [3, 4]
//   ])
//     returns [
//       [3, 1],
//       [4, 2]
//     ]
//   rotateMatrix([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ])
//     returns [
//       [7, 4, 1],
//       [8, 5, 2],
//       [9, 6, 3]
//     ]
//  rotateMatrix([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
//   ])
//     returns [
//       [13, 9, 5, 1],
//       [14, 10, 6, 2],
//       [15, 11, 7, 3],
//       [16, 12, 8, 4]
//     ]

const rotateMatrix = (matrix) => {
  const rotated = [];
  const n = matrix.length;
  let rowIndexToRotate = 0;
  let columnIndexToRotateTo = n - 1;

  // insert empty arrays
  for (let i = 0; i < n; i++) {
    rotated.push([]);
  }

  while (rowIndexToRotate < n && columnIndexToRotateTo >= 0) {
    for (let i = 0; i < n; i++) {
      rotated[i][columnIndexToRotateTo] = matrix[rowIndexToRotate][i];
    }
    rowIndexToRotate++;
    columnIndexToRotateTo--;
  }

  return rotated;
};

//# Function call
const mat2 = [
  [1, 2],
  [3, 4],
];

const mat3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const mat4 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const result = rotateMatrix(mat2);
console.log(result);
