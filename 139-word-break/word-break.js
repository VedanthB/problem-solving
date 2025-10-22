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
        const startJ = Math.max(0, i - maxL)

        for(let j = i - 1; j >= startJ; j--) {
            if(!dp[j]) continue

            const piece = s.slice(j, i)
            if(dict.has(piece)) {
                dp[i] = true
                break
            }
        }
    }

    return dp[n]
};