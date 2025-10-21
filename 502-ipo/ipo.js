/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
    const n = profits.length 
    const projects = Array.from({ length: n }, (_, i) => ({ 
        required: capital[i],
        gain: profits[i]
     }))

    projects.sort((a, b) => a.required - b.required)

    let currentCapital = w
    let scanIndex = 0

    const candidateProfits = new MyMaxHeap()

    for(let picks = 0; picks < k; picks ++) {
        while(scanIndex < n && projects[scanIndex].required <= currentCapital) {
            candidateProfits.push(projects[scanIndex].gain)
            scanIndex++
        }

        if(candidateProfits.size() === 0) break

        currentCapital += candidateProfits.pop()
    } 

    return currentCapital
};

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
    size() { return this.heap.length }
    peek() { return this.heap.length ? this.heap[0] : undefined }

    _parent(i) { return Math.floor((i - 1) / 2 )}
    _left(i) { return 2 * i + 1}
    _right(i) { return 2 * i + 2 }
    _swap(a, b) { [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]] }

    _bubbleUp(i) {
        while(i > 0) {
            const p = this._parent(i)
            if(this.heap[p] >= this.heap[i]) break
            this._swap(p, i)
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
            this._swap(largest, i)
            i = largest
        }
    }
}