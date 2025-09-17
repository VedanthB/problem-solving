/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if(!head) return head

    let current = head
    while(current) {
        const cloned = new _Node(current.val, current.next, null) 
        current.next = cloned
        current = cloned.next
    }

    current = head
    while(current) {
        const cloned = current.next
        cloned.random = current.random ? current.random.next : null
        current = cloned.next
    }

    current = head
    let clonedHead = head.next
    while(current) {
        const cloned = current.next
        current.next = cloned.next
        cloned.next = cloned.next ? cloned.next.next : null
        current = current.next
    }

    return clonedHead
};