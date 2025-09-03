/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const n = obstacleGrid.length
    const m = obstacleGrid[0].length
    const memo = Array.from({ length: n }, () => new Array(m).fill(-1))

    function dfs(r, c) {
        if(r >= n || c >= m) return 0
        if(obstacleGrid[r][c] === 1) return 0
        if(r === n - 1 && c === m - 1) return 1

        if(memo[r][c] !== -1) return memo[r][c]

        memo[r][c] = dfs(r, c + 1) + dfs(r + 1, c)
        return memo[r][c]
    } 

    return dfs(0, 0)
};