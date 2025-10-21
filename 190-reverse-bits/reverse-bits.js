/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let reversed = 0 >>> 0
    let x = n >>> 0

    for(let step =0; step < 32; step++) {
        const currBit = x & 1
        reversed = (reversed << 1) | currBit
        x >>>= 1
    }

    return reversed >>> 0
};