/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let nums1Set = new Set(nums1)
    let result = new Set()

    for(let num of nums2) {
        if(nums1Set.has(num)) {
            result.add(num)
        }
    }

    return Array.from(result)
};

// Brute force approach 

function intersectionOfSortedArrays(nums1, nums2) {
  let result = [];
 
  for (let i = 0; i < nums1.length; i++) {
    // Check if the element is in nums2 and not already in the result
    if (nums2.includes(nums1[i]) && !result.includes(nums1[i])) {
      result.push(nums1[i]);
    }
  }
 
  return result;
}