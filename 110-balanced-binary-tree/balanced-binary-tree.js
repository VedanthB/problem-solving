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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root) return true

    function dfs(node) {
        if(!node) return 0

        const lh = dfs(node.left)
        if(lh === -1) return -1

        const rh = dfs(node.right)
        if(rh === -1) return -1

        if(Math.abs(lh - rh) > 1) return -1

        return 1 + Math.max(lh, rh)
    }

    return dfs(root) !== -1
};