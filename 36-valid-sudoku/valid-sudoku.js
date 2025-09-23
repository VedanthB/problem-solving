/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const size = 9

    const rowSet = Array.from({ length: size }, () => new Set())
    const colSet = Array.from({ length: size }, () => new Set())
    const boxSet = Array.from({ length: size }, () => new Set())

    for(let row = 0; row < size; row++) {
        for(let col = 0; col < size; col++) {
            if(board[row][col] === ".") continue

            const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3)

            if(rowSet[row].has(board[row][col])) return false
            if(colSet[col].has(board[row][col])) return false
            if(boxSet[boxIndex].has(board[row][col])) return false

            rowSet[row].add(board[row][col])
            colSet[col].add(board[row][col])
            boxSet[boxIndex].add(board[row][col])
        }
    }

    return true
};