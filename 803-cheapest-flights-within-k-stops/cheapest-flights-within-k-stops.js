/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    const maxEdges = k + 1
    const bestCost = Array.from({ length: n }, () => Array(maxEdges + 1).fill(Infinity)) // city
    bestCost[src][0] = 0

    const graph = Array.from({ length: n }, () => [])

    for(const [u, v, w] of flights) graph[u].push([v, w])

    const pq = new MyMinHeap()
    pq.push([0, src, 0]) // cost, city, edgesUsed

    while(pq.size()) {
        const [cost, city, edgesUsed] = pq.pop()

        if(city === dst) return cost
        if(cost > bestCost[city][edgesUsed]) continue

        if(edgesUsed === maxEdges) continue

        for(const [neiCity, neiCost] of graph[city]) {
            const nextUsed = edgesUsed + 1
            const nextCost = cost + neiCost

            if(nextCost < bestCost[neiCity][nextUsed]) {
                bestCost[neiCity][nextUsed] = nextCost
                pq.push([nextCost, neiCity, nextUsed])
            }
        }
    }

    return -1
};

class MyMinHeap {
    constructor() {
        this.a = []
    }

    push(x) {
        this.a.push(x)
        this._bubbleUp(this.size() - 1)
    }
    pop() {
        if(this.isEmpty()) return undefined
        const last = this.a.pop()
        if(this.isEmpty()) return last
        const top = this.a[0]
        this.a[0] = last
        this._bubbleDown(0)
        return top
    }
    size() {
        return this.a.length
    }
    isEmpty() {
        return this.a.length === 0
    }

    _bubbleUp(i) {
        while(i > 0) {
            const p = this._parent(i)
            if(this.a[p][0] <= this.a[i][0]) break
            this._swap(p, i)
            i = p
        }
    }
    _bubbleDown(i) {
        const n = this.size()

        while(true) {
            let s = i, l = this._left(i), r = this._right(i)

            if(l < n && this.a[l][0] < this.a[s][0]) s = l
            if(r < n && this.a[r][0] < this.a[s][0]) s = r
            if(i === s) break
            this._swap(s, i)
            i = s
        }
    }

    _swap(i, j) {
        [this.a[i], this.a[j]] = [this.a[j], this.a[i]]
    } 

    _parent(i) {
        return Math.floor((i - 1) / 2)
    }
    _left(i) {
        return 2 * i + 1
    }
    _right(i) {
        return 2 * i + 2
    }
}