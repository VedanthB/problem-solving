/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function(matrix) {
  let totalRows = matrix.length;
  let totalColumns = matrix[0].length;

  let low = 0
  let high = totalColumns - 1

  while(low <= high) {
    let mid = Math.floor((low + high) / 2)

    let maxRow = 0

    for (let i = 0; i < totalRows; i++) {
      if(matrix[i][mid] > matrix[maxRow][mid]) {
        maxRow = i
      }
    }

    let midLeft = mid > 0 ? matrix[maxRow][mid - 1] : -1
    let midRight = mid < totalColumns - 1 ? matrix[maxRow][mid + 1] : -1

    if(matrix[maxRow][mid] > midLeft && midRight < matrix[maxRow][mid]) {
      return [maxRow, mid]
    } else if (midLeft > matrix[maxRow][mid]) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return []
};