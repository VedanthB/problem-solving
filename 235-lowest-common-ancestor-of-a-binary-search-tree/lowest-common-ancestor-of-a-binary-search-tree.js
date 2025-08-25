/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
   // Ensure pVal <= qVal
  let pVal = p.val, qVal = q.val;
  if (pVal > qVal) [pVal, qVal] = [qVal, pVal];

  let curr = root;
  while (curr) {
    if (qVal < curr.val) {
      curr = curr.left;       // both in left subtree
    } else if (pVal > curr.val) {
      curr = curr.right;      // both in right subtree
    } else {
      return curr;            // split point (or equals), this is the LCA node
    }
  }
  return null;
};