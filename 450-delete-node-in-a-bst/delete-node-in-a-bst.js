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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    function minNode(node) {
        while(node && node.left) node = node.left
        return node
    }

    if(!root) return null

    if(key < root.val) {
        root.left = deleteNode(root.left, key)
    } else if(key > root.val) {
        root.right = deleteNode(root.right, key)
    } else {
        if(!root.left && !root.right) {
            return null
        } else if (!root.left) {
            return root.right
        } else if(!root.right) {
            return root.left
        } else {
            const succ = minNode(root.right)
            root.val = succ.val
            root.right = deleteNode(root.right, succ.val)
        }
    }

    return root
};