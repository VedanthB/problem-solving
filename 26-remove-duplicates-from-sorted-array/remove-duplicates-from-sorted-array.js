/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
 if (nums.length === 0) return 0;
 
  // 'i' is the slow-runner pointer that tracks the position of the unique element.
  let i = 0;
 
  // Iterate over the array with 'j', the fast-runner pointer.
  for (let j = 1; j < nums.length; j++) {
    // If the current element (pointed by 'j') is not equal to the element at 'i',
    // it means a new unique element is found.
    if (nums[j] !== nums[i]) {
      i++; // Move 'i' to the next position.
      nums[i] = nums[j]; // Update the element at 'i' with the unique element found at 'j'.
    }
  }
 
  // The length of the array with unique elements is 'i + 1'.
  // 'i' is an index, so we add 1 to get the count.
  return i + 1;
};

//brute force approach 
function removeDuplicatesBruteForce(arr) {
  // Initialize an array to hold unique elements.
  const uniqueElements = [];
 
  // Iterate through each element in the original array.
  for (let i = 0; i < arr.length; i++) {
    // If the current element is not already in uniqueElements, add it.
    if (!uniqueElements.includes(arr[i])) {
      uniqueElements.push(arr[i]);
    }
  }
 
  // Copy the unique elements back into the original array.
  // This part assumes that the original array should be updated to contain only unique elements.
  for (let i = 0; i < uniqueElements.length; i++) {
    arr[i] = uniqueElements[i];
  }
 
  // Return the number of unique elements found.
  return uniqueElements.length;
}