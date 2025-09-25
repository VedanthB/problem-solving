/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if(!root) return null

    let current = root

    while(current) {
        const dummy = new Node(0)
        let tail = dummy

        for(let i = current; i; i = i.next) {
            if(i.left) {
                tail.next = i.left
                tail = tail.next
            }

            if(i.right) {
                tail.next = i.right
                tail = tail.next
            }
        }

        current = dummy.next
    }

    return root
};