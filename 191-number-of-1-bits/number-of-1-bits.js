/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let x = n >>> 0
    let count= 0

    while(x !== 0) {
        x = x & (x - 1)
        count++
    }

    return count
};