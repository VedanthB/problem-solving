/**
 * @param {number[]} arr
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(arr, k) {
  const n = arr.length; // Get the length of the array.
  k = k % n; // Use modulus to handle rotations larger than the array size.
 
  // Reverse the first part of the array (from start to 'n - k - 1').
  reverse(arr, 0, n - k - 1);
  // Reverse the second part of the array (from 'n - k' to the end).
  reverse(arr, n - k, n - 1);
  // Finally, reverse the entire array.
  reverse(arr, 0, n - 1);
};

// This function reverses a segment of an array from 'start' to 'end'.
function reverse(arr, start, end) {
  // Continue swapping elements until the start index meets or crosses the end index.
  while (start < end) {
    // Swap the elements at the 'start' and 'end' indexes.
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++; // Move the start index forward.
    end--; // Move the end index backward.
  }
}


// brute force method

function rotateToRight(arr, k) {
  const n = arr.length; // Get the length of the array.
  k = k % n; // Use modulus to handle rotations larger than the array size.
 
  let temp = []; // Temporary array to hold the elements that will be moved to the front.
 
  // Copy the last 'k' elements to the temporary array.
  for (let i = n - k; i < n; i++) {
    temp.push(arr[i]);
  }
 
  // Shift the remaining elements (from the beginning to 'n-k') to the right by 'k' positions.
  for (let i = n - k - 1; i >= 0; i--) {
    arr[i + k] = arr[i];
  }
 
  // Copy the elements from the temporary array to the beginning of the original array.
  for (let i = 0; i < k; i++) {
    arr[i] = temp[i];
  }
 
  // Return the rotated array.
  return arr;
}