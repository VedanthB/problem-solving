/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length, n = obstacleGrid[0].length 

    if(obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) return 0

    const dp = new Array(n).fill(0)
    dp[0] = 1

    for(let r = 0; r < m; r++) {
        for(let c = 0; c < n; c++) {
            if(obstacleGrid[r][c] === 1) {
                dp[c] = 0
            } else if(c > 0) {
                dp[c] += dp[c - 1] 
            }
        }
    }

    return dp[n -1]
};