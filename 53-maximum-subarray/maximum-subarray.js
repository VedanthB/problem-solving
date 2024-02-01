/**
 * @param {number[]} nums
 * @return {number}
 */

//  Kadane's Algo
var maxSubArray = function(nums) {
    let currentMax = nums[0]
    let globalMax = nums[0]

    for(let i = 1; i < nums.length; i++){
        currentMax = Math.max(nums[i], currentMax + nums[i])

        if(currentMax > globalMax) {
            globalMax = currentMax
        }
    }


    return globalMax
};

// Brute Force Approach 

function maxSubArray(nums) {
    let maxSum = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            let currentSum = 0;
            for (let k = i; k <= j; k++) {
                currentSum += nums[k];
            }

            maxSum = Math.max(maxSum, currentSum);
        }
    }

    return maxSum;
}

// Better Approach 

function maxSubArray(nums) {
    let maxSum = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0;
        for (let j = i; j < nums.length; j++) {
            currentSum += nums[j]; // Add the current element to the sum
            maxSum = Math.max(maxSum, currentSum); // Update maxSum if currentSum is greater
        }
    }

    return maxSum;
}