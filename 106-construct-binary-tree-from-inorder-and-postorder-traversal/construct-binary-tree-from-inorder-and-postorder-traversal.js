/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const n = inorder.length 

    const inorderMap = new Map()
    for(let i = 0; i < n; i++) {
        inorderMap.set(inorder[i], i)
    }

    let postIndex = n - 1

    function dfs(left, right) {
        if(left > right) return null

        const rootVal = postorder[postIndex--]
        const root = new TreeNode(rootVal)

        const mid = inorderMap.get(rootVal)

        root.right = dfs(mid + 1, right)
        root.left = dfs(left, mid - 1) 
        return root
    }
    
    return dfs(0, n - 1)
};