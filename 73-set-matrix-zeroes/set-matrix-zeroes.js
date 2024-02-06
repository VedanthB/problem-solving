/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let col0 = 1;
    let rows = matrix.length, cols = matrix[0].length;

    // Mark rows and columns
    for (let i = 0; i < rows; i++) {
        if (matrix[i][0] === 0) col0 = 0;
        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = matrix[0][j] = 0;
            }
        }
    }

    // Update the matrix except the first row and column
    for (let i = rows - 1; i >= 0; i--) {
        for (let j = cols - 1; j >= 1; j--) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
        if (col0 === 0) matrix[i][0] = 0;
    }
};

// Better Approach 

function setZeroes(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    let rowMarker = new Array(numRows).fill(0);
    let colMarker = new Array(numCols).fill(0);

    // Step 1: Traverse and mark rows and columns
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (matrix[i][j] === 0) {
                rowMarker[i] = 1;
                colMarker[j] = 1;
            }
        }
    }

    // Step 2: Set rows and columns to 0 based on markers
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (rowMarker[i] === 1 || colMarker[j] === 1) {
                matrix[i][j] = 0;
            }
        }
    }
}

// Brute Force 

function setZeroes(matrix) {
    const ROWS = matrix.length;
    const COLS = matrix[0].length;

    // Step 1 & 2: Traverse and mark rows and columns
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (matrix[i][j] === 0) {
                // Mark cells in the same row
                for (let k = 0; k < COLS; k++) {
                    if (matrix[i][k] !== 0) {
                        matrix[i][k] = -1;
                    }
                }

                // Mark cells in the same column
                for (let k = 0; k < ROWS; k++) {
                    if (matrix[k][j] !== 0) {
                        matrix[k][j] = -1;
                    }
                }
            }
        }
    }

    // Step 3: Convert marked cells to 0
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (matrix[i][j] === -1) {
                matrix[i][j] = 0;
            }
        }
    }
}
