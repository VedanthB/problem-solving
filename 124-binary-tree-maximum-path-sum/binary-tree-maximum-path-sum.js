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
 * @return {number}
 */
var maxPathSum = function(root) {
    if(!root) return 0

    let best = -Infinity 
    let stack = [[root, false]]
    let map = new Map()

    while(stack.length) {
        const [node, visited] = stack.pop()

        if(!node) continue

        if(!visited) {
            stack.push([node, true])
            stack.push([node.right, false])
            stack.push([node.left, false])
        } else {
            const lh = Math.max(0, map.get(node.left) || 0)
            const rh = Math.max(0, map.get(node.right) || 0)

            const through = node.val + lh + rh 
            if(through > best) best = through

            map.set(node, node.val + Math.max(lh, rh)) 
        }
    }

    return best
};