/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {

  function countOnes(row) {
    let left = 0, right = row.length - 1

    while(left <= right) {
        const mid = left + ((right - left) >> 1)

        if(row[mid] == 1) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return row.length - left
  }  

  let result = -1
  let max = 0

  for(let i = 0; i < mat.length; i++) {
    let ones = countOnes(mat[i].sort())

    if(ones > max) {
        max = ones
        result = i
    }
  }

  return max === 0 ? [0, 0] : [result, max]
};