/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let left = 1
    let right = 1

    while(right < nums.length) {
        if(nums[right] != nums[left - 1]) {
            nums[left] = nums[right]
            left++
        }
        right++
    }

    return left
};