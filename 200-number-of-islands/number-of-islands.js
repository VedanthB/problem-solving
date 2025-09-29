/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const board = grid.map(i => i.slice())

    const rows = board.length 
    const cols = board[0].length 

    const dirs = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ]

    function inBounds(r, c) {
        return r >= 0 && r < rows && c >= 0 && c < cols
    }

    let islands = 0

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(board[i][j] === '1') {
                islands++

                const queue = [[i, j]]
                let head = 0
                board[i][j] = "0"

                while(head < queue.length) {
                    const [cr, cc] = queue[head++]

                    for(const [dr, dc] of dirs) {
                        const nr = dr + cr, nc = dc + cc

                        if(inBounds(nr, nc) && board[nr][nc] === '1') {
                            board[nr][nc] = "0"
                            queue.push([nr, nc])
                        }
                    } 
                }
            }
        }
    }

    return islands
};