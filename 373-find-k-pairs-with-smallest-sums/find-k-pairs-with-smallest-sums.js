/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    const n1 = nums1.length, n2 = nums2.length
    if(n1 === 0 || n2 === 0 || k === 0) return []

    const result = []
    const heap = new MyMinHeap()

    const limit = Math.min(k, n1)

    for(let i = 0; i < limit; i++) {
        heap.push([nums1[i] + nums2[0], i, 0])
    }

    while(heap.size() > 0 && result.length < k) {
        const [sum, i, j] = heap.pop()

        result.push([nums1[i], nums2[j]])

        if(j + 1 < n2) {
            heap.push([nums1[i] + nums2[j + 1], i , j + 1])
        }
    }

    return result
};

class MyMinHeap {
    constructor() {
        this.heap = []
    }

    push(x) {
        this.heap.push(x)
        this._bubbleUp(this.size() - 1)
    }
    pop() {
        if(this.size() === 0) return undefined
        const top = this.heap[0]
        const last = this.heap.pop()
        if(this.size() > 0) {
            this.heap[0] = last
            this._bubbleDown(0)
        }
        return top
    }
    size() { return this.heap.length }
    top() { return this.heap[0] }

    _parent(i) { return Math.floor((i - 1)/ 2) }
    _left(i) { return 2 * i + 1 }
    _right(i) { return 2 * i + 2 }
    _swap(a, b) { [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]] }

    _bubbleUp(i) {
        while(i > 0) {
            const p = this._parent(i)
            if(this.heap[p][0] <= this.heap[i][0]) break
            this._swap(i, p)
            i = p
        }
    }
    _bubbleDown(i) {
        const n = this.size()
        while(true) {
            let smallest = i
            const l = this._left(i)
            const r = this._right(i)

            if(l < n && this.heap[l][0] < this.heap[smallest][0]) smallest = l
            if(r < n && this.heap[r][0] < this.heap[smallest][0]) smallest = r
            if(smallest === i) break
            this._swap(i, smallest)
            i = smallest
        }
    }
}