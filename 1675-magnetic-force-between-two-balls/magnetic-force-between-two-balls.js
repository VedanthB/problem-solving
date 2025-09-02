/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
    const positions = [...position].sort((a, b) => a - b)
    const n = positions.length 

    function canPlace(minGap) {
        let placed = 1
        let lastPos = positions[0]

        for(let i = 1; i < n; i++) {
            if(positions[i] - lastPos >= minGap) {
                placed++
                lastPos = positions[i]

                if(placed >= m) return true
            }
        }

        return false
    }

    let low = 0
    let high = positions[n - 1] - positions[0]
    let best = 0

    while(low <= high) {
        const mid = Math.floor((low + high) / 2)

        if(canPlace(mid)) {
            best = mid
            low = mid + 1
        } else {
            high = mid - 1
        }
    }  

    return best
};