/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const totalRows = triangle.length
    
    const dp = triangle[totalRows - 1].slice()

    for(let row = totalRows - 2; row >= 0; row--) {
        for(let col = 0; col < triangle[row].length; col++) {
            dp[col] = triangle[row][col] + Math.min(dp[col], dp[col + 1])
        } 
    } 

    return dp[0]
};

