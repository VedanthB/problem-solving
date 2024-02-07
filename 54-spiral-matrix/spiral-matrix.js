/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length === 0) return [];

    let result = [];
    let left = 0, right = matrix[0].length - 1;
    let top = 0, bottom = matrix.length - 1;

    while (left <= right && top <= bottom) {
        // Traverse from Left to Right
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        // Traverse from Top to Bottom
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        // Make sure we are now on a different row
        if (top <= bottom) {
            // Traverse from Right to Left
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        // Make sure we are now on a different column
        if (left <= right) {
            // Traverse from Bottom to Top
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
};