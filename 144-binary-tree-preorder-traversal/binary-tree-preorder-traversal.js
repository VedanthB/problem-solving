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
var preorderTraversal = function(root) {
        let curr = root
        let result = []

        while(curr) {
            if(!curr.left) {
                result.push(curr.val)
                curr = curr.right
            } else {
                let pred = curr.left
                while(pred.right && pred.right !== curr) {
                    pred = pred.right
                }

                if(!pred.right) {
                    result.push(curr.val)
                    pred.right = curr
                    curr = curr.left 
                } else {
                    pred.right = null
                    curr = curr.right 
                }
            }
        }

        return result 
};