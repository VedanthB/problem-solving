/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    let max = Math.max(...nums)
    if(nums.length > threshold) return -1;
    let low = 1, high = max

    while(low <= high) {
        let mid = Math.floor((low + high) / 2)

        if(lessThanThreshold(nums, threshold, mid)) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return low
};

function lessThanThreshold(nums, threshold, mid) {
    let sum = 0

    for(let i = 0; i < nums.length; i++) {
        if(nums[i])
        sum += Math.ceil(nums[i] / mid)
    }

    return sum <= threshold
}