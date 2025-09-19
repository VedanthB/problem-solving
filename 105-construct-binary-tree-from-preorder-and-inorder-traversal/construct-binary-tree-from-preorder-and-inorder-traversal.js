/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const n = preorder.length 
    if(n === 0) return null

    const inOrderMap = new Map()
    for(let i = 0; i < n; i++) {
        inOrderMap.set(inorder[i], i)
    }

    let preorderIndex = 0

    function dfs(l, r) {
        if(l > r) return null

        const rootVal = preorder[preorderIndex++]

        const root = new TreeNode(rootVal)
        const splitIndex = inOrderMap.get(rootVal)

        root.left = dfs(l, splitIndex - 1)
        root.right = dfs(splitIndex + 1, r)

        return root
    }

    return dfs(0, inorder.length - 1)
};