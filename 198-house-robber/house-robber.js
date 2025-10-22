/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let next = 0
    let next2 = 0


    for(let amount of nums) {
        const rob = amount + next
        const skip = next2
        const best = Math.max(rob, skip)

        next = next2
        next2 = best
    }

    return next2
};