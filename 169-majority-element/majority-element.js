/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // Moore's Voting Algorithm
    // First Phase: Find a Candidate
    let candidate = null;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Second Phase: Verify the Candidate
    count = 0;
    for (let num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    if (count > Math.floor(nums.length / 2)) {
        return candidate;
    }

    // In case there is no majority element
    return null;
};

// Using Hashing

function findMajorityElement(nums) {
    let hashMap = new Map();
    let majorityCount = Math.floor(nums.length / 2);

    for (let num of nums) {
        hashMap.set(num, (hashMap.get(num) || 0) + 1);

        if (hashMap.get(num) > majorityCount) {
            return num;
        }
    }

    // In case there is no majority element, but the problem assumes there is always one.
    return null;
}

//  Brute Force Solution

function findMajorityElement(nums) {
    let majorityCount = Math.floor(nums.length / 2);

    for (let i = 0; i < nums.length; i++) {
        let count = 0;

        for (let j = 0; j < nums.length; j++) {
            if (nums[j] === nums[i]) {
                count++;
            }
        }

        if (count > majorityCount) {
            return nums[i];
        }
    }

    // In case there is no majority element, but the problem assumes there is always one.
    return null;
}



