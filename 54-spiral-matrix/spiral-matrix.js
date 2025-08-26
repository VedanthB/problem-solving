/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const n = matrix.length, m = matrix[0].length

    const result = []
    let top = 0,
    bottom = n - 1,
    left = 0,
    right = m - 1 

    while(top <= bottom && left <= right) {
        // top row 
        for(let col = left; col <= right; col++) {
            result.push(matrix[top][col])
        }
        top += 1

        // right col
        for(let row = top; row <= bottom; row++) {
            result.push(matrix[row][right])
        }
        right -= 1

        // bottom row
        if(top <= bottom) {
            for(let col = right; col >= left; col--){
                result.push(matrix[bottom][col])
            }
            bottom -= 1
        }

        // left col
        if(left <= right) {
            for(let row = bottom; row >= top; row--) {
                result.push(matrix[row][left])
            }

            left += 1
        }
    }

    return result
};