/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(t.length > s.length) return ""

    const need = new Map()
    for(let ch of t) {
        need.set(ch, (need.get(ch) || 0) + 1)
    }
    const required = need.size

    const have = new Map()
    let formed = 0
    let beststart = 0, bestlength = Infinity

    let left = 0

    for(let right = 0; right < s.length; right++){
        const chR = s[right]

        if(need.has(chR)) {
            have.set(chR, (have.get(chR) || 0) + 1)

            if(have.get(chR) === need.get(chR)) {
                formed++
            }
        }

        while(formed === required && left <= right) {
            if(right - left + 1 < bestlength) {
                bestlength = right - left + 1
                beststart = left
            }

            const chL = s[left]

            if(need.has(chL)) {
                have.set(chL, (have.get(chL) || 0) - 1)

                if(have.get(chL) < need.get(chL)) {
                    formed--
                }
            }

            left++
        }
    }

    return bestlength === Infinity ? "" : s.slice(beststart, beststart + bestlength)
};