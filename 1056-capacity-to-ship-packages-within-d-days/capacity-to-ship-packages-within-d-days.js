/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let max = Math.max(...weights)
    let sum = weights.reduce(((acc, cur) => acc + cur), 0)

   
    let low = max,
        high = sum;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (countDays(weights, mid) <= days) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return low;
};

function countDays(arr, capacity) {
    let totalDays = 1
    let totalWeight = 0

    for(let i = 0; i < arr.length; i++) {
        if(totalWeight + arr[i] <= capacity) {
            totalWeight += arr[i]
        } else {
            totalWeight = arr[i]
            totalDays++
        }
    }

    return totalDays
}