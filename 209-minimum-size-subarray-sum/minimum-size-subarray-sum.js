/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let i = 0
    let sum = 0
    let best = Infinity

    for(let j = 0; j < nums.length; j++) {
        sum += nums[j]

        while(sum >= target) {
            best = Math.min(best, j - i + 1)
            sum -= nums[i]
            i++
        }
    }

    return best === Infinity ? 0 : best
};