/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(arr) {
    let xorArray = 0;
    let xorFull = 0;
 
    // XOR all elements in the array
    for (let num of arr) {
        xorArray ^= num;
    }
 
    // XOR all numbers from 1 to N
    for (let i = 1; i <= arr.length; i++) {
        xorFull ^= i;
    }
 
    // The missing number is the XOR of xorArray and xorFull
    return xorArray ^ xorFull;
};

//  using summation , sum of first natural nums N * (N + 1) / 2;

function findMissingNumber(arr, N) {
    // Calculate the expected sum of the first N natural numbers
    const expectedSum = N * (N + 1) / 2;
 
    // Calculate the actual sum of elements in the array
    let actualSum = 0;
    for (let num of arr) {
        actualSum += num;
    }
 
    // The difference between expectedSum and actualSum is the missing number
    return expectedSum - actualSum;
}

// using hash map

function findMissingNumber(arr, N) {
    // Create a hash set to store the numbers present in the array.
    let numberSet = new Set(arr);
 
    // Iterate from 1 to N.
    for (let i = 1; i <= N; i++) {
        // Check if the current number is not in the hash set.
        if (!numberSet.has(i)) {
            // If a number is missing, return it.
            return i;
        }
    }
 
    // If no number is missing, return -1 or any other error value.
    return -1;
}

// simple brute force using linear search 

function findMissingNumber(nums) {
  const n = nums.length;
 
  for (let i = 0; i <= n; i++) {
    let found = false;
    for (let j = 0; j < n; j++) {
      if (nums[j] === i) {
        found = true;
        break;
      }
    }
    if (!found) {
      return i;
    }
  }
}
 