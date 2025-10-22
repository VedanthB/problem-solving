/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let zeros = 0

    for(let p = 5; p <= n; p *= 5) {
        zeros += Math.floor(n / p)
    }

    return zeros
};