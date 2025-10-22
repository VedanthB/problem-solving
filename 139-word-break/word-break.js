/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const n = s.length 
    const dict = new Set(wordDict)
    let maxL = 0
    for(const w of wordDict) maxL = Math.max(maxL, w.length)

    const dp = new Array(n + 1).fill(false)
    dp[0] = true

    for(let i = 1; i <= n ;i++) {
        for(let j = Math.max(0, i - maxL); j < i; j++) {
            if(dp[j] && dict.has(s.slice(j, i))) {
                dp[i] = true
                break
            }
        }
    }

    return dp[n]
};