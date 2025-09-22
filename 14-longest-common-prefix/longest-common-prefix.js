/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return 0
    let prefix = strs[0]

    for(let i = 1; i < strs.length; i++) {
        const word = strs[i]

        while(prefix.length > 0 && !word.startsWith(prefix)) {
            prefix = prefix.slice(0, -1)
        }

        if(prefix.length === 0) return ""
    }

    return prefix
};