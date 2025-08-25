/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


class BSTIterator {
    constructor(root, forward = true) {
        this.stack = []
        this.forward = forward
        this._push(root)
    }

    _push(node) {
        while(node) {
            this.stack.push(node)
            node = this.forward ? node.left : node.right 
        }
    }

    next() {
        const node = this.stack.pop()

        if(this.forward) this._push(node.right)
        else this._push(node.left)

        return node.val
    }

    hasNext() {
        return this.stack.length > 0
    }
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
   if(!root) return false

   const lo = new BSTIterator(root)
   const hi = new BSTIterator(root, false) 

   if(!lo.hasNext() || !hi.hasNext()) return false

   let left = lo.next()
   let right = hi.next()

   while(left < right) {
        const sum = left + right

        if(sum === k) return true

        if(sum < k) {
            if(!lo.hasNext()) break 
            left = lo.next()
        } else  {
            if(!hi.hasNext()) break 
            right = hi.next()
        }
   }

   return false
};