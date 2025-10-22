/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const rows = matrix.length, cols = matrix[0].length 
    const dp = Array.from({ length: rows }, () => new Array(cols).fill(0))
    let bestSide = 0

    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
            if(matrix[r][c] === '1') {
                if(r === 0 || c === 0) {
                    dp[r][c] = 1
                } else {
                    dp[r][c] = 1 + Math.min(dp[r - 1][c], dp[r][c - 1], dp[r - 1][c - 1])
                }
                bestSide = Math.max(bestSide, dp[r][c])
            }
        }
    }

    return bestSide * bestSide
};