/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length
    if(n === 0) return 0 
    if(n === 1) return nums[0]

    let next = 0
    let next2 = 0

    for(let i = n - 1; i >=0 ; i--) {
        const take = nums[i] + next2
        const skip = next
        const current = Math.max(take, skip)
        next2 = next
        next = current
    } 

    return next

};