/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let N = nums1.length,  // Length of the first array
      M = nums2.length;  // Length of the second array

  let left = 0;  // Pointer for the first array
  let right = 0; // Pointer for the second array

  let totalLength = M + N;  // Total length of the merged arrays

  let mergedArr = [];  // Array to hold the merged result

  // Merge the two sorted arrays
  while (left < N && right < M) {
    if (nums1[left] <= nums2[right]) {
      mergedArr.push(nums1[left++]);  // Add element from the first array and increment pointer
    } else {
      mergedArr.push(nums2[right++]); // Add element from the second array and increment pointer
    }
  }

  // If there are remaining elements in the first array, add them
  while (left < N) {
    mergedArr.push(nums1[left++]);
  }

  // If there are remaining elements in the second array, add them
  while (right < M) {
    mergedArr.push(nums2[right++]);
  }

  // Find the median based on the total length
  if (totalLength % 2 == 1) {
    const median = Math.floor(totalLength / 2);  // If the total length is odd, get the middle element
    return mergedArr[median];
  }

  // If the total length is even, calculate the average of the two middle elements
  const medianIndexOne = totalLength / 2;
  const medianIndexTwo = totalLength / 2 - 1;

  const median = (mergedArr[medianIndexOne] + mergedArr[medianIndexTwo]) / 2;

  return median;
};