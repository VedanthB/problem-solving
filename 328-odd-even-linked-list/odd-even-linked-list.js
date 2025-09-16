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
var oddEvenList = function(head) {
    if(!head || !head.next) return head

    const oddNodes = []
    const evenNodes = []
    let current = head
    let position = 1

    while(current) {
        if(position % 2 === 1) {
            oddNodes.push(current)
        } else {
            evenNodes.push(current)
        }
        current = current.next
        position += 1
    }

    let newHead = null
    let tail = null

    for(const node of oddNodes) {
        if(!newHead) newHead = node
        if(tail) tail.next = node
        tail = node
    }

    for(const node of evenNodes) {
        tail.next = node
        tail = node
    }

    if(tail) tail.next = null
    return newHead || null
};