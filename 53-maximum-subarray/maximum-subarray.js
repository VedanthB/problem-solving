/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let bestSum = nums[0]
    let currentBest = nums[0]

    for(let i = 1; i < nums.length; i++) {
        const val = nums[i]

        currentBest  = Math.max(val, currentBest + val)

        if(currentBest > bestSum) bestSum = currentBest
    }

    return bestSum
};