/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const m = grid.length, n = grid[0].length 

    const dp = Array.from({ length: m }, (_, r) =>
        new Array(n).fill(undefined)
    );

    function dfs(r, c) {
        if(r === m - 1 && c === n - 1) {
            dp[r][c] = grid[r][c];
            return dp[r][c]
        }

        if(dp[r][c] !== undefined) return dp[r][c]
        
        let best = Infinity
        if(r + 1 < m) best = Math.min(best, dfs(r + 1, c))
        if(c + 1 < n) best = Math.min(best, dfs(r, c + 1))

        dp[r][c] = grid[r][c] + best
        return dp[r][c] 
    }

    return dfs(0,0)
};