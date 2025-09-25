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
var maxDepth = function(root) {
    if(!root) return 0

    const queue = [[root,1]]
    let head = 0

    let maxDepth = 0

    while(head < queue.length) {
        const [node, depth] = queue[head++]

        maxDepth = Math.max(maxDepth, depth)

        if(node.left) queue.push([node.left, depth + 1])
        if(node.right) queue.push([node.right, depth + 1])
    }

    return maxDepth
};