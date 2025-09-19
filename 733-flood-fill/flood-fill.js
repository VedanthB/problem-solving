/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const rows = image.length 
    const cols = image[0].length 
    const startColor = image[sr][sc]

    if(startColor === color) return image

    const ans = image.map(i => i.slice())

    const dirs = [
        [0, -1],
        [0, 1],
        [-1, 0],
        [1, 0]
    ]

    function inBounds(r, c) {
        return r >= 0 && r < rows && c >= 0 && c < cols
    }

    function dfs(r, c) {
        if(!inBounds(r, c)) return 
        if(ans[r][c] !== startColor) return 

        ans[r][c] = color

        for(const [dr, dc] of dirs) {
            dfs(r + dr, c + dc)
        }
    }

    dfs(sr, sc)

    return ans
};