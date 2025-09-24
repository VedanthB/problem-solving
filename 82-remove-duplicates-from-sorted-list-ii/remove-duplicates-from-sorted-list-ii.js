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
var deleteDuplicates = function(head) {
    const dummy = new ListNode(0, head)
    let prevDistinct = dummy
    let current = head

    while(current) {
        let hasDuplicate = false 

        while(current.next !== null && current.val === current.next.val) {
            current = current.next
            hasDuplicate = true
        }

        if(hasDuplicate) {
            prevDistinct.next = current.next 
        } else {
            prevDistinct = current
        }

        current = current.next
    }

    return dummy.next
};