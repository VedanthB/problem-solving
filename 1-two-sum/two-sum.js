/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//  most optimal solution suing two pointer
var twoSum = function(nums, target) {
    // Create an array of objects with value and original index
    let arr = nums.map((value, index) => ({ value, index }));

    // Sort the array based on the values
    arr.sort((a, b) => a.value - b.value);

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left].value + arr[right].value;

        if (sum === target) {
            return [arr[left].index, arr[right].index];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    // If no pair is found
    return [];
};


// better approach using hash map

function twoSum(nums, target) {
    let hashMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        // Check if the complement exists in the hash map
        if (hashMap.has(complement)) {
            return [hashMap.get(complement), i];
        }

        // Store the current element and its index in the hash map
        hashMap.set(nums[i], i);
    }

    // If no pair is found
    return [];
}

// Brute Force Approach 

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }

    // If no such pair is found
    return [];
}


