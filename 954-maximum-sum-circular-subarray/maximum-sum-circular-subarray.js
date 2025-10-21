/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    const n = nums.length

    let currBest = nums[0]
    let globalBest = nums[0]
    let currMin = nums[0]
    let globalMin = nums[0]

    let total = nums[0]

    for(let i = 1; i < n; i++) {
        let val = nums[i]
        total += val

        currBest = Math.max(val, currBest + val)
        globalBest = Math.max(globalBest, currBest) 
        currMin = Math.min(val, currMin + val) 
        globalMin = Math.min(globalMin, currMin) 
    }

    if(total === globalMin) return globalBest

    return Math.max(globalBest, total - globalMin)
};