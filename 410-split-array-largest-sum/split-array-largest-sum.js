/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
    let low = Math.max(...nums)
    let high = nums.reduce((acc, curr) => acc + curr, 0)

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)

        if(countSum(nums, mid) <= k) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return low
};

function countSum(arr, sum) {
    let N = arr.length 
    let totalSum = 0
    let partitions = 1

    for(let i = 0; i < N; i++) {
        if(totalSum + arr[i] <= sum ) {
            totalSum += arr[i]
        } else {
            partitions++
            totalSum = arr[i]
        } 
    } 

    return partitions
}