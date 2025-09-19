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
var diameterOfBinaryTree = function(root) {
    let best = 0

    function dfs(node) {
        if(!node) return -1

        const lh = dfs(node.left)
        const rh = dfs(node.right) 

        const diameter = lh + rh + 2

        if(diameter > best) best = diameter

        return 1 + Math.max(lh, rh)
    }

    dfs(root)

    return best
};