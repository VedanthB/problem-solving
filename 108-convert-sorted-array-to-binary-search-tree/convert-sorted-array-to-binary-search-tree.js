/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(!nums || nums.length === 0) return null

    function buildTree(left, right) {
        if(left > right) return null

        const middle = Math.floor((left + right) / 2)
        const node = new TreeNode(nums[middle])

        node.left = buildTree(left, middle - 1)
        node.right = buildTree(middle + 1, right)

        return node
    }

    return buildTree(0, nums.length - 1)
};