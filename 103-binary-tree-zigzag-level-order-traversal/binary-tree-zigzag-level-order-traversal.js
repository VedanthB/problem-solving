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
var zigzagLevelOrder = function(root) {
    if (!root) return []

    let result = []
    let queue = [root]
    let leftToRight = true

    while(queue.length) {
        let row = []
        let size = queue.length

        for(let i = 0; i < size; i++) {
            let node = queue.shift()

            if(leftToRight) {
                row.push(node.val)
            } else {
                row.unshift(node.val)
            }

            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        } 

        result.push(row)
        leftToRight = !leftToRight
    }

    return result
};