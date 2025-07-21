/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort()

    const first = strs[0]
    const last = strs[strs.length - 1]

    let i = 0
    while(first[i] === last[i] && i < first.length) {
        i++
    }

    return first.slice(0, i)
};