/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var countPaths = function(n, roads) {
    const MOD = 1e9 + 7
    const graph = Array.from({ length: n }, () => [])

    for(const [u, v, w] of roads) {
        graph[u].push([v, w])
        graph[v].push([u, w])
    } 

    const dist = new Array(n).fill(Infinity)
    const ways = new Array(n).fill(0)

    ways[0] = 1
    dist[0] = 0

    const pq = new MyMinHeap()
    pq.push([0, 0]) // dist, node

    while(pq.size()) {
        const [d, u] = pq.pop()
        if(d !== dist[u]) continue

        for(const [v, w] of graph[u]) {
            const cand = d + w

            if(cand < dist[v]) {
                dist[v] = cand
                ways[v] = ways[u]
                pq.push([cand, v])
            } else if (cand === dist[v]) {
                ways[v] = (ways[u] + ways[v]) % MOD
            }
        }
    }

    return ways[n - 1] % MOD 
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

    size() { return this.a.length }

    isEmpty() { return this.a.length === 0 }
    
    _bubbleUp(i) {
        while(i > 0) {
            const p = Math.floor((i - 1) / 2)
            if(this.a[p][0] <= this.a[i][0]) break
            [this.a[p], this.a[i]] = [this.a[i], this.a[p]]
            i = p
        } 
    }

    _bubbleDown(i) {
        const n = this.size()

        while(true) {
            let s = i, l = 2 * i + 1, r = l + 1

            if(l < n && this.a[l][0] < this.a[s][0]) s = l
            if(r < n && this.a[r][0] < this.a[s][0]) s = r
            if(s === i) break
            [this.a[s], this.a[i]] = [this.a[i], this.a[s]]
            i = s
        }
    }

}