/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const n = matrix.length 
  const m = matrix[0].length

  let row = 0
  let col = m - 1

  while(row < n && col >=0) {
    const val = matrix[row][col]

    if(val === target) return true
    else if(val > target) col--
    else row++
  }  

  return false
};