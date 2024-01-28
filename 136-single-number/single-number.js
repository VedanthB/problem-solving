/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // XOR approach
   let result = 0;

    for (let num of nums) {
        result ^= num;
    }

    return result;
};

//  using a Map hash

function findSingleNumber(arr) {
    let map = new Map();

    // Count occurrences of each element
    arr.forEach(num => {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    });

    // Find the element that appears once
    for (let [num, count] of map) {
        if (count === 1) {
            return num;
        }
    }

    // If no unique element is found
    return null;
}

// simple brute force approach 
function findSingleNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        let count = 0; // To count the occurrences of arr[i]

        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }

        // Check if the current element occurs only once
        if (count === 1) {
            return arr[i];
        }
    }

    // If no unique element is found
    return null;
}