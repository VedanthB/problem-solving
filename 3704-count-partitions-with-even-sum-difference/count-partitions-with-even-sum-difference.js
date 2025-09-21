/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
  const n = nums.length;
  const total = nums.reduce((a, b) => a + b, 0);
  return (total % 2 === 0) ? (n - 1) : 0;
};