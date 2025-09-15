/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
     const rows = matrix.length
     const cols = matrix[0].length 

     let left = 0
     let right = cols - 1

     for(let i = 0; i < rows; i++) {
        const first = matrix[i][0]
        const last = matrix[i][cols - 1]
        
        if(target < first || target > last) continue

        let left = 0, right = cols - 1

        while(left <= right) {
            const mid = left + Math.floor((right - left) / 2)
            const value = matrix[i][mid]
            if(value === target) return true
            if(value < target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
     }

     return false
};