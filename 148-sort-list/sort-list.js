/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if(head === null || head.next === null) return head

    let slow = head
    let fast = head
    let prev = null

    while(fast !== null && fast.next !== null) {
        prev = slow
        slow = slow.next
        fast = fast.next.next
    } 

    prev.next = null

    const leftSorted = sortList(head)
    const rightSorted = sortList(slow)

    function merge(a, b) {
        const dummy = new ListNode()
        let tail = dummy

        while(a !== null && b !== null) {
            if(a.val < b.val) {
                tail.next = a
                a = a.next
            } else {
                tail.next = b
                b = b.next
            }
            tail = tail.next
        }

        tail.next = (a !== null) ? a : b

        return dummy.next
    }

    return merge(leftSorted, rightSorted)
};