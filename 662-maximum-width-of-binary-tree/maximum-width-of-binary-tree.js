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
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
    if(!root) return 0

    let maxWidth = 0
    const queue = [[root, 0]]

    while(queue.length) {
       let size = queue.length 
       let base = queue[0][1]
       let last = 0, first = 0

       for(let i = 0; i < size; i++) {
            const [node, index] = queue.shift()

            const norm = index - base

            if(i === 0) first = norm
            if(i === size - 1) last = norm

            if(node.left) queue.push([node.left, 2 * norm + 1])
            if(node.right) queue.push([node.right, 2 * norm + 2])
       } 

       maxWidth = Math.max(maxWidth, last - first + 1)
    }

    return maxWidth
};