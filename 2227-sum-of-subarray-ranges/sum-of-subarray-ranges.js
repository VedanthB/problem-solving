/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
    const n = nums.length 

    const prevLess = Array(n).fill(-1)
    const nextLessEqual = Array(n).fill(n)

    const prevGreater = Array(n).fill(-1)
    const nextGreaterEqual = Array(n).fill(n)

    let stack = []
    for(let i = 0; i < n; i++) {
        while(stack.length > 0 && nums[stack[stack.length - 1]] >= nums[i]) {
            stack.pop()
        }
        prevLess[i] = stack.length ? stack[stack.length - 1] : -1
        stack.push(i)
    }

    stack = []
    for(let i = n - 1; i >= 0; i--) {
        while(stack.length > 0 && nums[stack[stack.length - 1]] > nums[i]) {
            stack.pop()
        }
        nextLessEqual[i] = stack.length ? stack[stack.length - 1] : n
        stack.push(i)
    }

    stack = []
    for(let i = 0; i < n; i++) {
        while(stack.length > 0 && nums[stack[stack.length - 1]] <= nums[i]) {
            stack.pop()
        }
        prevGreater[i] = stack.length ? stack[stack.length - 1] : -1
        stack.push(i)
    }

    stack = []
    for(let i = n - 1; i >= 0; i--) {
        while(stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
            stack.pop()
        }
        nextGreaterEqual[i] = stack.length ? stack[stack.length - 1] : n
        stack.push(i)
    }

    let sumMax = 0n
    let sumMin = 0n

    for(let i = 0; i < n; i++) {
       const leftMin = BigInt(i - prevLess[i])
       const rightMin = BigInt(nextLessEqual[i] - i)
       sumMin +=  BigInt(nums[i]) * leftMin * rightMin 

       const leftMax = BigInt(i - prevGreater[i])
       const rightMax = BigInt(nextGreaterEqual[i] - i)
       sumMax +=  BigInt(nums[i]) * leftMax * rightMax 
    }

    return Number(sumMax - sumMin)
};