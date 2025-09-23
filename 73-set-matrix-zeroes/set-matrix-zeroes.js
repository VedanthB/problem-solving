/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const n = matrix.length 
    const m = matrix[0].length 

    let firstRowZero = false
    let firstColZero = false
    
    for(let r = 0; r < n; r++) {
        if(matrix[r][0] === 0) {
            firstColZero = true
            break
        }
    }

    for(let c = 0; c < m; c++) {
        if(matrix[0][c] === 0) {
            firstRowZero = true
            break
        }
    }

    for(let r = 1; r < n; r++) {
        for(let c = 1; c < m; c++) {
            if(matrix[r][c] === 0){
                matrix[r][0] = 0
                matrix[0][c] = 0
            }
        }
    }

    for(let r = 1; r < n; r++) {
        for(let c = 1; c < m; c++) {
            if(matrix[r][0] === 0 || matrix[0][c] === 0){
                matrix[r][c] = 0
            }
        }
    }

    if(firstRowZero) {
        for(let c = 0; c < m; c++) matrix[0][c] = 0
    }

    if(firstColZero) {
        for(let r = 0; r < n; r++) matrix[r][0] = 0
    }
};