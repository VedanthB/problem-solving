/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next || k === 0) return head

    let listLength = 1
    let tail = head
    while(tail.next) {
        tail = tail.next
        listLength++
    }

    k = k % listLength 
    if(k === 0) return head

    tail.next = head

    let stepsToTail = listLength - k - 1
    let newTail = head
    for(let i = 0; i < stepsToTail; i++) {
        newTail = newTail.next
    }

    const newHead = newTail.next

    newTail.next = null

    return newHead
};