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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    const node = new TreeNode(val)
    if(!root) return node

    let curr = root
    while(true) {
        if(val < curr.val) {
            if(curr.left === null) {
                curr.left = node
                break
            }
            curr = curr.left
        } else {
            if(curr.right === null) {
                curr.right = node
                break
            }
            curr = curr.right
        }
    }

    return root
};