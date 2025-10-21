/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(!lists || lists.length === 0) return null

    const values = []
    for(const head of lists) {
        let node = head

        while(node) {
            values.push(node.val)
            node = node.next
        }
    }

    if(values.length === 0) return null

    values.sort((a, b) => a - b)

    const dummy = new ListNode(0)
    let tail = dummy

    for(const v of values) {
        tail.next = new ListNode(v)
        tail = tail.next
    }

    return dummy.next
};