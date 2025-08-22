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
    
    function leftHeight(node) {
        let h = 0

        while(node) { h++; node = node.left}

        return h 
    }

    function rightHeight(node) {
        let h = 0

        while(node) { h++; node = node.right}

        return h 
    }

    function dfs(node) {
        if(!node) return 0

        const lh = leftHeight(node)
        const rh = rightHeight(node)

        if(lh === rh) {
            return (1 << lh) - 1 // 2^h - 1
        }

        return 1 + dfs(node.left) + dfs(node.right)
    }

    return dfs(root)
};