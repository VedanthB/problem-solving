/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
   let numSet = new Set(nums);
    let longestStreak = 0;

    for (let num of nums) {
        if (!numSet.has(num - 1)) { // Check if 'num' can be the start of a sequence
            let currentNum = num;
            let currentStreak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
};

//  Brute Force Approach 

function longestConsecutive(nums) {
    if (nums.length === 0) return 0;

    let longestStreak = 0;

    for (let num of nums) {
        let currentNum = num;
        let currentStreak = 1;

        while (nums.includes(currentNum + 1)) {
            currentNum += 1;
            currentStreak += 1;
        }

        longestStreak = Math.max(longestStreak, currentStreak);
    }

    return longestStreak;
}

//  Better Approach 
function longestConsecutive(nums) {
    if (nums.length === 0) return 0;

    nums.sort((a, b) => a - b);
    
    let cnt = 1; // Start with 1 as the minimum length of the sequence is 1
    let longest = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) { // Check for non-duplicate element
            if (nums[i] === nums[i - 1] + 1) {
                cnt++;
            } else {
                longest = Math.max(longest, cnt);
                cnt = 1; // Reset count for a new sequence
            }
        }
    }

    return Math.max(longest, cnt); // Check at the end to handle the last sequence
}


