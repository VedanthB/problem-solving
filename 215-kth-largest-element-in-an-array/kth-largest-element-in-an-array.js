/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

class MinHeap {
    constructor() {
        this.heap = []
    }

    push(val) {
        this.heap.push(val)
        this._bubbleUp(this.heap.length - 1)
    }

    pop() {
        const top = this.heap[0]
        const end = this.heap.pop()

        if(this.heap.length) {
            this.heap[0] = end 
            this._bubbleDown(0)
        } 

        return top
    }

    _bubbleUp(i) {
        while(i > 0) {
            const parent = Math.floor((i - 1) / 2)
            if(this.heap[parent] <= this.heap[i]) break
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]]
            i = parent
        }
    }

    _bubbleDown(i) {
        const n = this.heap.length 
        while(true) {
            let smallest = i
            const l = 2 * i + 1, r = 2 * i + 2

            if(l < n && this.heap[l] < this.heap[smallest]) smallest = l
            if(r < n && this.heap[r] < this.heap[smallest]) smallest = r

            if(smallest === i) break

            [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]]
            i = smallest
        }
    }

    top() {
        return this.heap[0]
    }
}

var findKthLargest = function(nums, k) {
    const heap = new MinHeap()

    for(let num of nums) {
        heap.push(num)
        if(heap.heap.length > k) heap.pop()
    }

    return heap.top()
};