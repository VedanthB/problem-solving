/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let unique = 0

    for(const num of nums) {
        unique ^= num
    }

    return unique
};