
var MedianFinder = function() {
    this.low = new MyMaxHeap()
    this.high = new MyMinHeap()
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(this.low.size() === 0 || num <= this.low.peek()) {
        this.low.push(num)
    } else {
        this.high.push(num)
    }

    if(this.low.size() > this.high.size() + 1) {
        this.high.push(this.low.pop())
    } else if(this.high.size() > this.low.size()) {
        this.low.push(this.high.pop())
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.low.size() > this.high.size()) {
        return this.low.peek()
    }

    return (this.low.peek() + this.high.peek()) / 2
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

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
    peek() { return this.heap[0] }
    size() { return this.heap.length }

    _swap(a, b) { [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]] }
    _parent(i) { return Math.floor((i - 1) / 2) }
    _left(i) { return 2 * i + 1 }
    _right(i) { return 2 * i + 2 }
    _bubbleUp(i) { 
        while(i > 0) {
            const p = this._parent(i)
            if(this.heap[p] <= this.heap[i]) break
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

            if(l < n && this.heap[l] < this.heap[smallest]) smallest = l
            if(r < n && this.heap[r] < this.heap[smallest]) smallest = r
            if(smallest === i) break
            this._swap(i, smallest)
            i = smallest
        }
    } 
}

class MyMaxHeap {
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
    peek() { return this.heap[0] }
    size() { return this.heap.length }

    _swap(a, b) { [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]] }
    _parent(i) { return Math.floor((i - 1) / 2) }
    _left(i) { return 2 * i + 1 }
    _right(i) { return 2 * i + 2 }
    _bubbleUp(i) { 
        while(i > 0) {
            const p = this._parent(i)
            if(this.heap[p] >= this.heap[i]) break
            this._swap(i, p)
            i = p
        }
     }
    _bubbleDown(i) {
        const n = this.size()
        while(true) {
            let largest = i
            const l = this._left(i)
            const r = this._right(i)

            if(l < n && this.heap[l] > this.heap[largest]) largest = l
            if(r < n && this.heap[r] > this.heap[largest]) largest = r
            if(largest === i) break
            this._swap(i, largest)
            i = largest
        }
    }   
}