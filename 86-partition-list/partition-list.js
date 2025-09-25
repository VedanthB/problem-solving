/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const before = new ListNode(0)
    const after = new ListNode(0)

    let beforeTail = before
    let afterTail = after

    let current = head 

    while(current) {
        const next = current.next

        if(current.val < x) {
            beforeTail.next = current
            beforeTail = beforeTail.next
        } else {
            afterTail.next = current
            afterTail = afterTail.next
        }

        current.next = null
        current = next
    }

    beforeTail.next = after.next
    return before.next
};