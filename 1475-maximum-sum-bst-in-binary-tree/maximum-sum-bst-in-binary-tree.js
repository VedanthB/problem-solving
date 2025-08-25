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
var maxSumBST = function(root) {
let best = 0;

  function dfs(node) {
    // For null: treat as valid BST with neutral min/max and sum 0
    if (!node) return { isBST: true, min: Infinity, max: -Infinity, sum: 0 };

    const L = dfs(node.left);
    const R = dfs(node.right);

    // Current subtree is BST iff both children are BST and values are in strict range
    if (L.isBST && R.isBST && node.val > L.max && node.val < R.min) {
      const sum = L.sum + R.sum + node.val;
      best = Math.max(best, sum);
      return {
        isBST: true,
        sum,
        min: Math.min(L.min, node.val),
        max: Math.max(R.max, node.val),
      };
    }

    // Not a BST at this node; ensure parent can't use it as a BST
    return { isBST: false, min: -Infinity, max: Infinity, sum: 0 };
  }

  dfs(root);
  return best;
};