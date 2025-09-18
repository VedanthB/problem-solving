/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    const prefixCount = new Map() // prefix sum -> occurance
    prefixCount.set(0, 1)

    let currentSum = 0
    let totalSubarr = 0

    for(let i = 0; i < nums.length; i++) {
        currentSum += nums[i]

        const needed = currentSum - goal 
        
        if(prefixCount.has(needed)) {
            totalSubarr += prefixCount.get(needed)
        }

        prefixCount.set(currentSum, (prefixCount.get(currentSum) || 0) + 1)
    }

    return totalSubarr
};