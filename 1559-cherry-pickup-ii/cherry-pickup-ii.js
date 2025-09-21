/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
    const rows = grid.length 
    const cols = grid[0].length 

    let dp = Array.from({ length: cols }, () => Array(cols).fill(-Infinity))

    function inBounds(c1, c2) {
        return c1 >= 0 && c1 < cols && c2 >= 0 && c2 < cols
    }

    const lastRow = rows - 1

    for(let c1 = 0; c1 < cols; c1++) {
        for(let c2 = 0; c2 < cols; c2++) {
                if(c1 === c2) dp[c1][c2] = grid[lastRow][c1]
                else dp[c1][c2] = grid[lastRow][c1] + grid[lastRow][c2]
        }
    }
    

    for(let r = rows - 2; r >=0; r--) {
        let currDP = Array.from({ length: cols }, () => Array(cols).fill(-Infinity))

        for(let c1 = 0; c1 < cols; c1++) {
            for(let c2 = 0; c2 < cols; c2++) {
                let valueHere = grid[r][c1]
                if(c1 != c2) valueHere += grid[r][c2]

                let best = -Infinity

                for(const move1 of [-1, 0, 1]) {
                    for(const move2 of [-1, 0, 1]) {
                        const nc1 = c1 + move1
                        const nc2 = c2 + move2

                        if(!inBounds(nc1, nc2)) continue

                        best = Math.max(best, dp[nc1][nc2])
                    }
                }

                currDP[c1][c2] = valueHere + (best === -Infinity ? -Infinity : best)
            }
        }

        dp = currDP
    }

    return dp[0][cols - 1]
};