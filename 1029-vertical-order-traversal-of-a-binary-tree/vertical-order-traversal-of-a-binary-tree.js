/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    if(!root) return []

    const map = new Map()
    const queue = [{node: root, row: 0, col: 0}]
    let minCol = 0, maxCol = 0

    while(queue.length) {
        const {node, row, col} = queue.shift()

        if(!map.get(col)) map.set(col, [])
        map.get(col).push({row, val: node.val})

        minCol = Math.min(minCol, col)
        maxCol = Math.max(maxCol, col)

        if(node.left) queue.push({node: node.left, row: row + 1, col: col - 1 })
        if(node.right) queue.push({node: node.right, row: row + 1, col: col + 1 })
    }

    const result = []

    for(let i = minCol; i <= maxCol; i++) {
        const arr = map.get(i) || []
        arr.sort((a, b) => a.row - b.row || a.val - b.val)
        result.push(arr.map(x => x.val))
    }

    return result
};