/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const n = nums.length
    const result = new Array(n).fill(-1)

    const stack = []

    for(let i = 0; i < 2 * n - 1; i++) {
        const currentIndex = i % n 
        const currentValue = nums[currentIndex]

        while(stack.length && nums[stack[[stack.length - 1]]] < currentValue) {
            const indexNeedingNextGreater = stack.pop()
            result[indexNeedingNextGreater] = currentValue
        }

        if(i < n) stack.push(i)
    }

    return result
};