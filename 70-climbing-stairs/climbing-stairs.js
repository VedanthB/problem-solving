/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n <= 2) return n

    let waysMinusTwo = 1
    let waysMinusOne = 2


    for(let step = 3; step <= n; step++) {
        const currentStep = waysMinusOne + waysMinusTwo
        waysMinusTwo = waysMinusOne
        waysMinusOne = currentStep
    }

    return waysMinusOne
};