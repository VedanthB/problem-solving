/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    const n = s1.length, m = s2.length 
    if(n + m !== s3.length) return false

    const dp = new Array(m + 1).fill(false)
    dp[0] = true

    for(let j = 1; j <= m; j++) {
        dp[j] = dp[j - 1] && s2[j - 1] === s3[j - 1]
    }

    for(let i = 1; i <= n; i++) {
        dp[0] = dp[0] && s1[i - 1] === s3[i - 1]

        for(let j = 1; j <= m; j++) {
            const k = i + j - 1 

            dp[j] = (dp[j] && s1[i - 1] === s3[k]) || (dp[j - 1] && s2[j - 1] === s3[k])
        }
    }

    return dp[m]
};