/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row = 0
    let column = matrix[0].length - 1

    while(row < matrix.length && column >= 0) {
        if(matrix[row][column] === target) {
            return true
        } else if(matrix[row][column] < target) {
            row++
        } else {
            column--
        }
    }

    return false
};