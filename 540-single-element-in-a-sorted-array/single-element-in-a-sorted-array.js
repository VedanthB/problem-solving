/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let xor = 0

    for(const num of nums) {
        xor ^= num
    }

    return xor
};