/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const graph = new Map()

    const add = (u, v, w) => {
        if(!graph.has(u)) graph.set(u, [])
        graph.get(u).push([v, w])
    }

    for(let i = 0; i < equations.length; i++) {
        const [u, v] = equations[i], w = values[i]
        add(u, v, w)
        add(v, u, 1 / w) 
    }

    const memo = new Map()

    const bfs = (start, end) => {
        if(!graph.has(start) || !graph.has(end)) return -1.0
        if(start === end) return 1.0

        const key = `${start}->${end}`
        if(memo.has(key)) return memo.get(key)

        const queue = [[start, 1.0]]
        const seen = new Set()
        
        while(queue.length) {
            const [node, product] = queue.shift()

            for(const [nei, w] of graph.get(node) || []) {
                if(seen.has(nei)) continue

                const nextProduct = product * w

                if(nei == end) {
                    memo.set(key, nextProduct)
                    return nextProduct
                }

                seen.add(nei)
                queue.push([nei, nextProduct])
            } 
        }
        memo.set(key, -1.0)

        return -1.0
    }

    const res = []
    for(const [u, v] of queries) res.push(bfs(u, v))
    return res
};