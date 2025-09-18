/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const n = nums.length
    const result = new Array(n).fill(-1)

    for(let i = 0; i < n; i++) {
        const value = nums[i]

        for(let j = 1; j < n; j++) {
            const next = (i + j) % n

            if(nums[next] > value){
                result[i] = nums[next]
                break
            }
        }
    }

    return result
};