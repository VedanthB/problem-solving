/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false
    if(x !== 0 && x % 10 === 0) return false

    let remaining = x
    let reversedHalf = 0

    while(remaining > reversedHalf) {
        const lastDigit = remaining % 10
        reversedHalf = reversedHalf * 10 + lastDigit
        remaining = Math.floor(remaining / 10) 
    }

    return remaining === reversedHalf || remaining === Math.floor(reversedHalf / 10)
};