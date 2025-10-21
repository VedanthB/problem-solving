/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    const n = nums.length 
    let l = 0, r = n - 1

    if(nums[l] <= nums[r]) return nums[l]

    while(l < r) {
        const m = l + ((r - l) >> 1)

        if(nums[m] > nums[r]) {
            l = m + 1 
        } else {
            r = m
        }
    }

    return nums[l]
};