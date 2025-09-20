/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const rows = grid.length 
    const cols = grid[0].length


    let freshCount = 0
    const queue = []

    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
            if(grid[r][c] === 2) queue.push([r, c, 0])
            if(grid[r][c] === 1) freshCount++
        }
    }

    function inBounds(r, c) {
        return r >=0 && r < rows && c >=0 && c < cols 
    }

    const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ]

    let head = 0 

    const ans = grid.map(i => i.slice())

    let time = 0

    while(head < queue.length) {
        const [r, c, t] = queue[head++]
        time = Math.max(time, t)

        for(const [dr, dc] of dirs) {
            const nr = dr + r, nc = c + dc, nt = t + 1

            if(inBounds(nr, nc) && ans[nr][nc] === 1) {
                ans[nr][nc] = 2
                freshCount--
                queue.push([nr, nc, nt])
            }
        }
    }

    return freshCount === 0 ? time : -1
};