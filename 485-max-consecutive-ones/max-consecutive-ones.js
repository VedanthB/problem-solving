/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(arr) {
    let maxCount = 0; // To store the maximum count of consecutive ones
    let currentCount = 0; // To store the current count of consecutive ones

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            // Increment the current count if the element is 1
            currentCount++;
            // Update maxCount if currentCount is greater
            maxCount = Math.max(maxCount, currentCount);
        } else {
            // Reset current count if the element is 0
            currentCount = 0;
        }
    }

    return maxCount;
};