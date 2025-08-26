/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let bestSum = nums[0]
    let currentSum = nums[0]

    for(let i = 1; i < nums.length; i++) {
        const val = nums[i]

        currentSum = Math.max(val, currentSum + val)

        if(currentSum > bestSum) bestSum = currentSum
    }

    return bestSum
};