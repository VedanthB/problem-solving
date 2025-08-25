/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const V = isConnected.length 
    const visited = new Array(V).fill(false)
    
    let count = 0

    for(let i = 0; i < V; i++) {
        if(visited[i]) continue

        count++

        const stack = [i]
        visited[i] = true

        while(stack.length) {
            const node = stack.pop()
            
            for(let nei = 0; nei < V; nei++) {
                if(isConnected[node][nei] === 1 && !visited[nei]) {
                    visited[nei] = true
                    stack.push(nei)
                }
            }
        }
    }

    return count
};