/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const rows = board.length 
    const cols = board[0].length

    const visited = Array.from({ length: rows }, () => new Array(cols).fill(false))

    function dfs(r, c, index) {
        if(index === word.length) return true
        if(r < 0 || r >= rows || c < 0 || c >= cols) return false
        if(visited[r][c] === true) return false
        if(board[r][c] !== word[index]) return false

        visited[r][c] = true

        const found = dfs(r + 1, c, index + 1) ||
                      dfs(r, c + 1, index + 1) ||
                      dfs(r - 1, c, index + 1) ||
                      dfs(r, c - 1, index + 1)  

        visited[r][c] = false
        return found
    }

    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
            if(dfs(r, c, 0)) return true
        }
    }

    return false
};