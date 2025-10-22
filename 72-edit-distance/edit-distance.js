/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const n = word1.length, m = word2.length

   const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0))

   for(let i = 0; i <= n; i++) dp[i][0] = i
   for(let j = 0; j <= m; j++) dp[0][j] = j

   for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= m; j++) {
        if(word1[i - 1] === word2[j - 1]) {
            dp[i][j] = dp[i - 1][j - 1]
        } else {
            const del = dp[i - 1][j]
            const ins = dp[i][j - 1]
            const rep = dp[i - 1][j - 1]
            dp[i][j] = 1 + Math.min(del, ins, rep)
        }
    }
   }

   return dp[n][m]
};