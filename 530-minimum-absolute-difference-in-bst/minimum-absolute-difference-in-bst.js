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
var getMinimumDifference = function(root) {
    let prev = null
    let mindiff = Infinity

    function dfsinorder(node) {
        if(!node) return 

        dfsinorder(node.left)

        if(prev !== null) {
            const diff = node.val - prev
            if(diff < mindiff) mindiff = diff
        }

        prev = node.val

        dfsinorder(node.right)
    }

    dfsinorder(root)

    return mindiff === Infinity ? 0 : mindiff
};