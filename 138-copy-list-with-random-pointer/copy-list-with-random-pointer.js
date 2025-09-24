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
    if(head === null) return null

    const ogToCopy = new Map()

    let current = head
    while(current) {
        ogToCopy.set(current, new _Node(current.val))
        current = current.next
    }

    current = head
    while(current) {
        const ogCopy = ogToCopy.get(current)
        ogCopy.next = current.next ? ogToCopy.get(current.next) : null
        ogCopy.random = current.random ? ogToCopy.get(current.random) : null
        current = current.next
    }
    
    return ogToCopy.get(head)
};