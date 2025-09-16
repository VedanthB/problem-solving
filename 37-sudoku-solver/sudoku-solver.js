/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const size = 9

    function isSafe(row, col, ch) {
        for(let k = 0; k < size; k++) {
            if(board[k][col] === ch) return false
            if(board[row][k] === ch) return false
        }

        const boxRow = Math.floor(row / 3) * 3
        const boxCol = Math.floor(col / 3) * 3

        for(let r = 0; r < 3; r++) {
            for(let c = 0; c < 3; c++) {
                if(board[boxRow + r][boxCol + c] === ch) return false
            }
        }

        return true
    }

    function dfsFill() {
        for(let row = 0; row < size; row++) {
            for(let col = 0; col < size; col ++) {
                if(board[row][col] !== '.') continue

                for(let d = 1; d <= 9; d++) {
                    const ch = String(d)

                    if(isSafe(row, col, ch)) {
                        board[row][col] = ch
                        if(dfsFill()) return true
                        board[row][col] = "."
                    }
                }

                return false
            }
        }

        return true
    }

    dfsFill()
};