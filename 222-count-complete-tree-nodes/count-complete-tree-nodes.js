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
var countNodes = function(root) {
    
    function dfs(node) {
        if(!node) return 0

        const leftHeight = _getHeight(node, true)
        const rightHeight = _getHeight(node, false)

        if(leftHeight === rightHeight) {
            return (1 << leftHeight) - 1 // 2^h - 1
        }

        return 1 + dfs(node.left) + dfs(node.right)
    }

    function _getHeight(node, goLeft) {
        let h = 0
        while(node) {
            h++
            node = goLeft ? node.left : node.right
        }
        return h
    }
    
    return dfs(root)
};

