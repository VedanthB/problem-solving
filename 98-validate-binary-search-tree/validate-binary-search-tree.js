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
 * @return {boolean}
 */
var isValidBST = function(root) {
    let curr = root
    let prev = null

    while(curr) {
        if(!curr.left) {
            if(prev !== null && curr.val  <= prev) return false
            prev = curr.val
            curr = curr.right
        } else {
            let pred = curr.left
            while(pred.right && pred.right !== curr) pred = pred.right

            if(!pred.right) {
                pred.right = curr
                curr = curr.left
            } else {
                pred.right = null
                if(prev !== null && curr.val  <= prev) return false
                prev = curr.val
                curr = curr.right
            }
        }
    }

    return true
};