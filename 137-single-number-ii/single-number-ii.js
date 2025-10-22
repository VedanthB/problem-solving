/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ones = 0, twos = 0

    for(const x of nums) {
        ones = (ones ^ x) & ~twos
        twos = (twos ^ x) & ~ones
    }

    return ones | 0
};