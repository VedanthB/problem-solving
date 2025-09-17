/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const bitCounts = new Array(32).fill(0)

    for(const x of nums) {
        for(let i = 0; i < 32; i++) {
            bitCounts[i] += (x >>> i) & 1
        }
    }

    let result = 0
    for(let i = 0; i < 32; i++) {
        if(bitCounts[i] % 3 !== 0) {
            result |= (1 << i) 
        }
    }

    return result | 0
};