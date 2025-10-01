/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    const n = board.length 
    const finalSquare = n * n 

    function labelToRowCol(label) {
        const zeroBased = label - 1
        const rowFromBottom = Math.floor(zeroBased / n)
        const row = n - 1 - rowFromBottom
        const colInRow = zeroBased % n 
        const col = (rowFromBottom % 2 === 0) ? colInRow : n - 1 - colInRow
        return [row, col]
    }

    const distance = new Array(finalSquare + 1).fill(-1)
    const queue = [1]
    distance[1] = 0
    
    while(queue.length) {
        const current = queue.shift()
        if(current === finalSquare) return distance[current]

        for(let i = 1; i <= 6; i++) {
            let next = current + i
            if(next > finalSquare) break

            const [r, c] = labelToRowCol(next)

            if(board[r][c] != -1) {
                next = board[r][c]
            }

            if(distance[next] === -1) {
                distance[next] = distance[current] + 1
                queue.push(next)
            }
        }
    }

    return -1
};