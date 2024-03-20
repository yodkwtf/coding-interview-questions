//* Given an array and chunk size, divide the array into many subarrays where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

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

const result = chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log(result);
