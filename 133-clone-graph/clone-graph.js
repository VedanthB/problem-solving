/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if(node === null) return null
    
    const memo = new Map()

    function dfs(node) {
        if(memo.has(node)) return memo.get(node)
        const clone = new _Node(node.val)
        memo.set(node, clone)

        for(const nei of node.neighbors) {
            clone.neighbors.push(dfs(nei))
        }

        return clone
    }

    return dfs(node)
};