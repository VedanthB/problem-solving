/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    function generateRow(n) {
        let result = 1

        let resultRow = [1]

        for(let i = 1; i < n ; i++){
            result = result * (n - i)
            result = result / i 

            resultRow.push(result)
        }

        return resultRow
    }
    let ans = []

    for(let i = 1; i <= numRows; i++) {
        ans.push(generateRow(i))
    }

    return ans
};

// Brute Force Approach 


function nCr(n, r) {
    let res = 1;
  
    // calculating nCr:
    for (let i = 0; i < r; i++) {
      res = res * (n - i);
      res = res / (i + 1);
    }
    return parseInt(res);
}
  
function pascalTriangle(n) {
    const ans = [];
  
    //Store the entire pascal's triangle:
    for (let row = 1; row <= n; row++) {
      const tempLst = []; // temporary list
      for (let col = 1; col <= row; col++) {
        tempLst.push(nCr(row - 1, col - 1));
      }
      ans.push(tempLst);
    }
    return ans;
}
  