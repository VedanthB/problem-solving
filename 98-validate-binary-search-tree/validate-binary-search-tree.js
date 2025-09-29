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
var isValidBST = function(root) {

    function dfs(node, lb, ub) {
        if(!node) return true

        const val = node.val

        if(val <= lb || val >= ub) return false

        return dfs(node.left, lb, val) && dfs(node.right, val, ub)
    }

    return dfs(root, -Infinity, Infinity)
};