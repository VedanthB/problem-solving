/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const n = nums.length 
    
    function lowerBound() {
        let l = 0, r = n - 1, ans = n

        while(l <= r) {
            const m = l + ((r - l) >> 1)
            if(nums[m] >= target) {
                ans = m
                r = m - 1
            } else {
                l = m + 1
            }
        }

        return ans
    }
    function upperBound() {
        let l = 0, r = n - 1, ans = n

        while(l <= r) {
            const m = l + ((r - l) >> 1)
            if(nums[m] > target) {
                ans = m
                r = m - 1
            } else {
                l = m + 1
            }
        }

        return ans
    }

    const first = lowerBound()

    if(first === n || nums[first] !== target) return [-1, -1]

    const last = upperBound() - 1

    return [first, last]
};