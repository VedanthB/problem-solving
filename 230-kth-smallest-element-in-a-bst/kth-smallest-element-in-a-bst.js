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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let count = 0
    let answer = null

    function dfs(node) {
        if(!node) return 
        
        dfs(node.left)

        if(answer !== null) return 
        count++
        if(count === k) {
            answer = node.val
            return 
        }

        dfs(node.right)
    }

    dfs(root)

    return answer
};