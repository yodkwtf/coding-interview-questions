//* Given an array and chunk size, divide the array into many subarrays where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//# Basic Way
function chunk(array, size) {
  let chunkedArray = [];
  let curChunk = [];

  for (let i = 0; i < array.length; i++) {
    curChunk.push(array[i]);

    if (curChunk.length === size) {
      chunkedArray.push(curChunk);
      curChunk = [];
    }
  }

  curChunk.length > 0 && chunkedArray.push(curChunk);

  return chunkedArray;
}

// # Fancy Way
const fancyChunking = (array, size) => {
  const finalChunk = [];
  let curChunk = [];

  for (let item of array) {
    curChunk.push(item);

    if (curChunk.length === size || item === array[array.length - 1]) {
      finalChunk.push(curChunk);
      curChunk = [];
    }
  }

  return finalChunk;
};

const result = fancyChunking([1, 2, 3, 4, 5], 3);
console.log(result);
