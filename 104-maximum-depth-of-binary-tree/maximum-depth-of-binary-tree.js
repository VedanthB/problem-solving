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

    let maxDepth = 0
    let stack = [[root, 1]]

    while(stack.length) {
        let [node, depth] = stack.pop()

        maxDepth = Math.max(maxDepth, depth)

        if(node.left) stack.push([node.left, depth + 1])
        if(node.right) stack.push([node.right, depth + 1])
    }

    return maxDepth
};