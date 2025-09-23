/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = []
    nums.sort((a, b) => a - b)
    const n = nums.length

    for(let i = 0; i < n - 2; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) continue

        let left = i + 1
        let right = n - 1

        while(left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            
            if(sum === 0) {
                result.push([nums[i], nums[left], nums[right]])

                const leftVal = nums[left]
                while(left < right && nums[left] === leftVal) left++

                const rightVal = nums[left]
                while(left < right && nums[right] === rightVal) right--
            } else if(sum < 0) {
                left++
            } else {
                right--
            }
        } 
    }

    return result
};