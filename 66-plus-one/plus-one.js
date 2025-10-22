/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const results = digits.slice()

    for(let i = results.length - 1; i >= 0 ; i--) {
        if(results[i] < 9) {
            results[i] += 1
            return results
        }

        results[i] = 0
    }

    results.unshift(1)
    return results
};