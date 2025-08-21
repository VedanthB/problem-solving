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
    const path = []
    if(!root) return res 

    function dfs(node) {
        if(!node) return

        path.push(node.val)

        if(!node.left && !node.right) {
            result.push(path.join('->'))
        } else {
            dfs(node.left)
            dfs(node.right)
        }
        
        path.pop()
    }

    dfs(root)

    return result 
};