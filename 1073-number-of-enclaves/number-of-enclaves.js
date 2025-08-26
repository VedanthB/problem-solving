/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    const n = grid.length
    const m = grid[0].length
    const visited = Array.from({ length: n }, () => Array(m).fill(false))
    const queue = []

    function pushIfLand(r,c) {
        if(!visited[r][c] && grid[r][c] === 1) {
            visited[r][c] = true
            queue.push([r, c])
        } 
    }

    for(let r = 0; r < n; r++) {
        pushIfLand(r, 0)
        pushIfLand(r, m - 1)
    }

    for(let c = 0; c < m; c++) {
        pushIfLand(0, c)
        pushIfLand(n - 1, c)
    }

    const dirs = [
        [1, 0],
        [-1, 0],
        [0, -1],
        [0, 1]
    ]

    while(queue.length) {
        const [cr, cc] = queue.shift()

        for(const [dr, dc] of dirs) {
            const nr = dr + cr, nc = dc + cc

            if(nr < 0 || nr >= n || nc < 0 || nc >= m) continue
            if(visited[nr][nc]) continue
            if(grid[nr][nc] !== 1) continue

            visited[nr][nc] = true
            queue.push([nr, nc])
        }
    }

    let enclaves = 0

    for(let r = 0; r < n; r++) {
        for(let c = 0; c < m; c++) {
            if(grid[r][c] === 1 && !visited[r][c]) enclaves++
        }
    }

    return enclaves
};