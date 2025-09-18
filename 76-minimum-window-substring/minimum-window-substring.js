/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(t.length > s.length) return ""

    const requiredCount = new Map()
    for(const ch of t) {
        requiredCount.set(ch, (requiredCount.get(ch) || 0) + 1)
    }
    const requiredUnique = requiredCount.size

    const windowMap = new Map()
    let formedUnique = 0

    let bestLength = Infinity
    let bestStartIndex = 0

    for(let i = 0, j = 0; j < s.length; j++) {
        const rightCh = s[j]

        if(requiredCount.has(rightCh)) {
            windowMap.set(rightCh, (windowMap.get(rightCh) || 0) + 1)
            if(windowMap.get(rightCh) === requiredCount.get(rightCh)) {
                formedUnique++
            }
        }

        while(formedUnique === requiredUnique && i <= j) {
            const currLength = j - i + 1
            if(currLength < bestLength) {
                bestLength = currLength
                bestStartIndex = i 
            }

            const leftCh = s[i]
            if(requiredCount.has(leftCh)) {
                windowMap.set(leftCh, (windowMap.get(leftCh) || 0) - 1)
                if(windowMap.get(leftCh) < requiredCount.get(leftCh)) {
                    formedUnique--
                }
            }
            i++
        } 
    }
    

    return bestLength === Infinity ? "" : s.slice(bestStartIndex, bestStartIndex + bestLength) 
};