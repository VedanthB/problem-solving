/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const tails = []

    for(const x of nums) {
        let left = 0, right = tails.length
        while(left < right) {
            const mid = left + ((right - left) >> 1)
            if(tails[mid] < x) left = mid + 1
            else right = mid
        }

        tails[left] = x
    }

    return tails.length
};