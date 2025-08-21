/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    if(!root) return []

    let targetNode = null
    const parentMap = new Map() // node -> parent

    function dfs(node, parent = null) {
        if(!node) return 

        if(node === target) targetNode = node
        if(parent) parentMap.set(node, parent)

        dfs(node.left, node)
        dfs(node.right, node)
    }

    dfs(root, null)

    if(!targetNode) return []

    if(k === 0) return [targetNode.val]

    const res = []
    const visited = new Set([targetNode])
    const queue = [targetNode]
    let dist = 0

    while(queue.length) {
        const size = queue.length

        if(dist === k) {
            for(const node of queue) res.push(node.val)
            break
        }

        for(let i = 0; i < size; i++) {
            const node = queue.shift()

            for (const nei of [node.left, node.right, parentMap.get(node)]) {
                if(nei && !visited.has(nei)) {
                    visited.add(nei)
                    queue.push(nei)
                }
            }
        }
        dist++
    } 

    return res
};