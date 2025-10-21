/**
 * // Definition for a QuadTree node.
 * function _Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {_Node}
 */
var construct = function(grid) {
    const n= grid.length

    function build(startRow, startCol, size) {
        const first = grid[startRow][startCol]
        let uniform = true
        for(let r = startRow; r < startRow + size && uniform; r++) {
            for(let c = startCol; c< startCol + size; c++) {
                if(grid[r][c] !== first) { uniform = false; break; }
            }
        }

        if(uniform) {
            return new Node(first === 1, true, null, null, null, null)
        }

        const half = size >> 1
        const topLeft = build(startRow, startCol, half)
        const topRight = build(startRow, startCol + half, half)
        const bottomLeft = build(startRow + half, startCol, half)
        const bottomRight = build(startRow + half, startCol + half, half)

        return new Node(true, false, topLeft, topRight, bottomLeft, bottomRight)
    }

    return build(0, 0, n)
};