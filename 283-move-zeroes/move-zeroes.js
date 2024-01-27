/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(arr) {
  // Initialize a pointer 'j' to keep track of the position
  // where the next non-zero element should be placed.
  let j = 0;
 
  // Loop through each element of the array with the index 'i'.
  for (let i = 0; i < arr.length; i++) {
    // Check if the current element is non-zero.
    if (arr[i] !== 0) {
      // If it's non-zero, swap the current element with the element at index 'j'.
      // This swap moves the non-zero element to the position marked by 'j'
      // and brings a zero (if any) to the current position 'i'.
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
 
      // Increment 'j' to update the next target position for a non-zero element.
      // 'j' only moves when a non-zero element is encountered.
      j++;
    }
  }
 
};

// brute force approach 
function moveZerosToEndBruteForce(arr) {
  let temp = []; // A temporary array to store non-zero elements
  let count = 0; // A counter to keep track of the number of non-zero elements
 
  // Loop through each element in the original array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      // If the current element is not zero, add it to the temp array
      // and increment the counter
      temp[count++] = arr[i];
    }
  }
 
  // After copying all non-zero elements to the temp array,
  // fill the remaining positions in the temp array with zeros
  // until the length of the temp array matches the original array
  while (count < arr.length) {
    temp[count++] = 0;
  }
 
  // Copy the contents of the temp array back to the original array
  for (let i = 0; i < arr.length; i++) {
    arr[i] = temp[i];
  }
 
  // Return the modified original array
  return arr;
}