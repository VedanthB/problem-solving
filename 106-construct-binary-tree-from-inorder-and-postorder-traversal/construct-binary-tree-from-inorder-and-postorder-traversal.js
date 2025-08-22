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
    if(n === 0) return null
    
    const indexMap = new Map()
    for(let i =0 ; i < n; i++) indexMap.set(inorder[i], i)

    let postPos = n - 1

    function helper(inL, inR) {
        if(inL > inR) return null

        const rootVal = postorder[postPos--]
        const mid = indexMap.get(rootVal)
        const root = new TreeNode(rootVal)

        root.right = helper(mid + 1, inR)
        root.left = helper(inL, mid - 1)

        return root
    } 

    return helper(0, n - 1)
};