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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let first = null , second = null , prev = null
    let curr = root

    const visit = (node) => {
        if(prev && prev.val > node.val) {
            if(!first) first = prev
            second = node
        }

        prev = node
    }

    while(curr) {
        if(!curr.left) {
            visit(curr) 
            curr = curr.right
        } else {
            let pred = curr.left
            while(pred.right && pred.right != curr) pred = pred.right 

            if(!pred.right) {
                pred.right = curr
                curr = curr.left
            } else{
                pred.right = null
                visit(curr)
                curr = curr.right
            }
        }
    }

    if(first && second) {
        const t = first.val
        first.val = second.val
        second.val = t
    }
};