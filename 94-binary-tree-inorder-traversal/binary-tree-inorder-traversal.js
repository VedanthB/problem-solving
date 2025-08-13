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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let result = []
    let current = root

    while(current) {
        if(!current.left) {
            result.push(current.val)
            current = current.right
        } else {
            let pred = current.left
            while(pred.right && pred.right !== current) {
                pred = pred.right
            }

            if(!pred.right) {
                pred.right = current
                current = current.left
            } else {
                pred.right = current
                result.push(current.val)
                current = current.right
            }
        }
    }
    
    return result
};