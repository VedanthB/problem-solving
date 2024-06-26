/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
    let low = Math.max(...nums)
    let high = nums.reduce((a, b) => a + b, 0)

    while(low <= high) {
        let mid = Math.floor((low + high) / 2)

        if(countSum(nums, mid) > k) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }

    return low
};

function countSum(arr, sum) {
    let count = 1
    let totalSum = 0

    for(let i = 0; i < arr.length; i++) {
        if(totalSum + arr[i] <= sum) {
            totalSum += arr[i]
        } else {
            count++
            totalSum = arr[i] 
        }
    }

    return count
}

