/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(grid) {

    const rows = grid.length
    const cols = grid[0].length 

    const inBounds = (r, c) => r >= 0 && r < rows && c >= 0 && c < cols
    const dirs = [[-1, 0], [1,0],[0, -1], [0, 1]]
    
    const queue = []

    for(let c = 0; c < cols; c++) {
        if(grid[0][c] === "O") { grid[0][c] = 'S'; queue.push([0,c]) }
        if(grid[rows - 1][c] === "O")  { grid[rows - 1][c] = 'S'; queue.push([rows - 1, c]) }
    }

    for(let r = 0; r < rows; r++) {
        if(grid[r][0] === "O") {grid[r][0] = 'S'; queue.push([r, 0]) }
        if(grid[r][cols - 1] === "O")  { grid[r][cols - 1] = 'S'; queue.push([r, cols - 1]) }
    }

    while(queue.length) {
        const [cr, cc] = queue.shift()

        for(const [dr, dc] of dirs) {
            const nr = dr + cr, nc = dc + cc

            if(inBounds(nr, nc) && grid[nr][nc] === "O") {
                grid[nr][nc] = "S"
                queue.push([nr, nc])
            }
        }
    }

    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
            if(grid[r][c] === 'O') grid[r][c] = 'X'
            else if(grid[r][c] === 'S') grid[r][c] = 'O'
        }
    }

};