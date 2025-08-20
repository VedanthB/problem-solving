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
var rightSideView = function(root) {

    function dfs(node, level, result) {
        if(!node) return 

        if(level === result.length) result.push(node.val)

        const first = node.right
        const second = node.left

        dfs(first, level + 1, result)
        dfs(second, level + 1, result)
    }

    const result = []

    dfs(root, 0, result)
    return result 
};