/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
     const numberOfRows = mat.length;
  const numberOfColumns = mat[0].length;

  let bestRowIndex = 0;
  let highestOnesCount = 0;

  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    let onesCountInRow = 0;
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      if (mat[rowIndex][columnIndex] === 1) {
        onesCountInRow++;
      }
    }

    if (onesCountInRow > 0 && onesCountInRow > highestOnesCount) {
      highestOnesCount = onesCountInRow;
      bestRowIndex = rowIndex;
    }
    // If equal, we prefer the smaller index, so do nothing
  }



  return [bestRowIndex, highestOnesCount];
};