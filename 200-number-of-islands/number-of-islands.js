/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const rows = grid.length
    if(rows === 0) return 0

    const cols = grid[0].length
    if(cols === 0) return 0

    const visited = Array.from({ length : rows }, () => new Array(cols).fill(false))

    function inBounds(r, c) {
        return r >= 0 && r < rows && c >=0 && c < cols
    }

    const dirs = [
        [0, -1], // r
        [0, 1], // l
        [1, 0], // u
        [-1, 0], // d
        // [1, 1], // tl
        // [-1, 1], // bl
        // [1, -1], // tr
        // [-1, -1], // br
    ]
    let islandCount = 0

    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
            if(grid[r][c] === "1" && !visited[r][c]) {
                islandCount += 1

                const queue = [[r, c]]

                visited[r][c] = true

                let head = 0

                while(head < queue.length) {
                    const [cr, cc] = queue[head++]

                    for(const [dr, dc] of dirs) {
                        const nr = dr + cr, nc = dc + cc

                        if(inBounds(nr, nc) && !visited[nr][nc] && grid[nr][nc] === "1") {
                            visited[nr][nc] = true
                            queue.push([nr, nc])
                        }
                    }
                }
            }
        }
    }

    return islandCount
};