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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const result = []
    if(!root) return res 

    function dfs(node, path) {
        if(!node) return

        const newPath = [...path, node.val]

        if(!node.left && !node.right) {
            result.push(newPath.join('->'))
        }

        dfs(node.left, newPath)
        dfs(node.right, newPath)
    }

    dfs(root, [])

    return result 
};