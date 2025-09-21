/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    const rows = matrix.length 
    const cols = matrix[0].length 

    let prev = matrix[0].slice()

    for(let r = 1; r < rows; r++) {
        const curr = Array(cols).fill(Infinity)

        for(let c = 0; c < cols; c++) {
            const up = prev[c]
            const upLeft = c > 0 ? prev[c - 1] : Infinity
            const upRight = c + 1 < cols ? prev[c + 1] : Infinity

            curr[c] = matrix[r][c] + Math.min(up, upLeft, upRight)
        }

        prev = curr
    }

    return Math.min(...prev)
};