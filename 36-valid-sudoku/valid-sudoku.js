/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = Array.from({ length: 9 }, () => new Set())
    const cols = Array.from({ length: 9 }, () => new Set())
    const boxes = Array.from({ length: 9 }, () => new Set())

    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            const ch = board[i][j]

            if(ch === '.') continue

            const b = Math.floor(i / 3) * 3 + Math.floor(j / 3)

            if(rows[i].has(ch) || cols[j].has(ch) || boxes[b].has(ch)) {
                return false
            }

            rows[i].add(ch)
            cols[j].add(ch)
            boxes[b].add(ch)
        }
    }

    return true
};