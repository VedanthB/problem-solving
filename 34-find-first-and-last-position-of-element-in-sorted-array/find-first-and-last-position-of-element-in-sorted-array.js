/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    function findBound(isFirst) {
        let left = 0, right = nums.length - 1, res = -1

        while(left <= right) {
            const mid = left + ((right - left) >> 1)

            if(nums[mid] === target) {
                res = mid

                if(isFirst) right = mid - 1
                else left = mid + 1
            } else if (nums[mid] < target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        } 

        return res
    }

    return [findBound(true), findBound(false)]
};