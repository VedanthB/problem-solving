/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const rows = board.length 

    if (rows === 0) return;                  // guard empty

    const cols = board[0].length

    const dirs = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ]

    const inBounds = (r,c) => r >= 0 && r < rows && c >=0 && c < cols



    function dfsMark(r, c) {
        if(!inBounds(r, c) || board[r][c] !== "O") return 
    
        board[r][c] = "S"

        for(const [dr, dc] of dirs) {
            const nr = dr + r, nc = dc + c

            dfsMark(nr, nc)
        }
    }

    for(let r = 0; r < rows; r++) {
        if(board[r][0] === "O") dfsMark(r, 0)
        if(board[r][cols - 1] === "O") dfsMark(r, cols - 1) 
    }

    for(let c = 0; c < cols; c++) {
        if(board[0][c] === "O") dfsMark(0, c)
        if(board[rows -1][c] === "O") dfsMark(rows - 1, c) 
    }

    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
            if(board[r][c] === "S") board[r][c] = "O"
            else if (board[r][c] === "O") board[r][c] = "X"
        }
    }

    return board
};