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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return []

    const result = []
    let ltr = true
    const queue = [root]
    let head = 0

    while(head < queue.length) {
        const size = queue.length - head
        const currLevel = []

        for(let i = 0; i < size; i++) {
            const node = queue[head++]
            
            if(ltr) {
                currLevel.push(node.val)
            } else {
                currLevel.unshift(node.val)
            }

            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        result.push(currLevel)
        ltr = !ltr
    } 

    return result
};