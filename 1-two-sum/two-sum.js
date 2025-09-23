/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const valuetoindex = new Map()

    for(let i = 0; i < nums.length; i++) {
        const current = nums[i]
        const needed = target - current

        if(valuetoindex.has(needed)) {
            return [valuetoindex.get(needed), i]
        }

        valuetoindex.set(current, i)
    }

    return [-1, -1]
};