/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const result = []
    const queenColByRow = Array(n).fill(-1)

    function safe(targetRow, targetCol) {
        for(let r = 0; r < targetRow; r++) {
            const c = queenColByRow[r]

            if(c === targetCol) return false
            if(Math.abs(r - targetRow) === Math.abs(c - targetCol)) return false
        }

        return true
    }

    function backtrack(currentRow) {
        if(currentRow === n) {
            const board = []

            for(let r = 0; r < n; r++) {
                const c = queenColByRow[r]

                board.push(".".repeat(c) + "Q" + ".".repeat(n - c - 1))
            }

            result.push(board)
            return
        }

        for(let col = 0; col < n; col++) {
            if(!safe(currentRow, col)) continue

            queenColByRow[currentRow] = col

            backtrack(currentRow + 1)

            queenColByRow[currentRow] = -1
        }
    }

    backtrack(0)

    return result
};