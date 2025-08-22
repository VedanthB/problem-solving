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
    if(n === 0) return []

    const indexMap = new Map()
    
    for(let i = 0; i < n; i ++) indexMap.set(inorder[i], i)
    let prePos = 0

    function helper(inL, inR) {
        if(inL > inR) return null

        const rootVal = preorder[prePos++]
        const root = new TreeNode(rootVal)

        const mid = indexMap.get(rootVal)

        root.left = helper(inL, mid - 1)
        root.right = helper(mid + 1, inR)

        return root
    }

    return helper(0, n - 1)
};