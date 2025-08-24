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
    let curr = root 
    let result = null
    let count = 0

    while(curr) {
        if(!curr.left) {
            count++
            if(count === k) result = curr.val
            curr = curr.right 
        } else {
            let pred = curr.left
            while(pred.right && pred.right !== curr) pred = pred.right

            if(!pred.right) {
                pred.right = curr
                curr = curr.left
            }  else {
                pred.right = null
                count++
                if(count === k) result = curr.val
                curr = curr.right 
            }  
        }
    }

    return result 
};