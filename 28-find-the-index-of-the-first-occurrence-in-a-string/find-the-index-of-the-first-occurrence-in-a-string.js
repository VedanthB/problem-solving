/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const n = haystack.length
    const m = needle.length 
    if(m > n) return -1

    for(let i = 0; i + m <= n; i++) {
        let matched = true

        for(let j = 0; j < m; j++) {
            if(haystack[i + j] !== needle[j]) {
                matched = false
                break
            }
        }

        if(matched) return i
    }

    return -1
};