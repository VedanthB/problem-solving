/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
    const n = nums.length 

    if(k > n) return -1

    let low = 0
    let high = 0

    for(const num of nums) {
        low = Math.max(low, num)
        high += num
    }

    function canSplit(maxSum) {
        let needed = 1
        let current = 0

        for(const num of nums) {
            if(num + current <= maxSum) {
                current += num
            } else {
                needed += 1
                current = num
                if(needed > k) return false 
            }
        } 

        return true
    }

    let answer = high
    while(low <= high) {
        const mid = Math.floor((low + high) / 2)

        if(canSplit(mid)) {
            answer = mid
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return answer
};