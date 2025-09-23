/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const result = []
    const n = nums.length
    let left = 0

    while(left < n) {
        let right = left

        while(right + 1 < n && nums[right + 1] === nums[right] + 1) {
            right++
        }

        const start = nums[left]
        const end = nums[right]

        result.push(start === end ? String(start) : `${start}->${end}`)

        left = right + 1
    }

    return result
};