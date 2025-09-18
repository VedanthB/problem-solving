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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let result = []

    function dfs(current) {
        if(current === null) return 

        dfs(current.left)
        dfs(current.right)
        result.push(current.val)
    }

    dfs(root)

    return result
};