/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    if(matrix[i][0] <= target &&  matrix[i][matrix[i].length - 1] >= target) {
        return binarySearch(matrix[i], target);
    }
  }
  
  return false;
};

function binarySearch(matrix, target) {
    let low = 0
    let high = matrix.length - 1

    while(low <= high) {
        let mid = Math.floor((low + high) / 2)

        if(matrix[mid] === target) {
            return true
        } else if (matrix[mid] > target) { 
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return false
}