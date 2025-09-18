/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    const prefixCount = new Map() // prefixSum -> occurance
    prefixCount.set(0, 1)

    let total = 0
    let currentOddPrefix = 0

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 !== 0) currentOddPrefix++ 

        const needed = currentOddPrefix - k
        if(prefixCount.has(needed)) {
            total += prefixCount.get(needed)
        }
        
        prefixCount.set(currentOddPrefix, (prefixCount.get(currentOddPrefix) || 0) + 1)
    }

    return total
};