/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const m = grid.length, n = grid[0].length 

   const dp = new Array(n).fill(0)

   dp[0] = grid[0][0]

   for(let c = 1; c < n; c++) dp[c] = dp[c - 1] + grid[0][c]

   for(let r = 1; r < m; r++) {
    dp[0] += grid[r][0]

    for(let c = 1; c < n; c++) {
        dp[c] = grid[r][c] + Math.min(dp[c], dp[c - 1])
    } 
   }

   return dp[n - 1]
};