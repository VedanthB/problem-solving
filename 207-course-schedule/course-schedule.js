/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const adj = Array.from({ length: numCourses }, () => [])
    const inDegree = Array(numCourses).fill(0)

    for(const [a, b] of prerequisites) {
        adj[b].push(a)
        inDegree[a]++
    }

    const queue = [ ]
    for(let i = 0; i < numCourses; i++) {
        if(inDegree[i] === 0) queue.push(i)
    } 

    let head = 0
    let processed = 0

    while(head < queue.length) {
        const node = queue[head++]

        processed++

        for(const nei of adj[node]) {
            if(--inDegree[nei] === 0) queue.push(nei)
        }
    }

    return processed === numCourses
};