/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length === 0) return []

    const sorted = intervals.slice().sort((a, b) => a[0] - b[0])

    const merged = []

    let [currentStart, currentEnd] = sorted[0]

    for(let i = 1; i < sorted.length; i++) {
        const [nextStart, nextEnd] = sorted[i]

        if(nextStart <= currentEnd) {
            currentEnd = Math.max(currentEnd, nextEnd)

        } else {
            merged.push([currentStart, currentEnd])

            currentStart = nextStart
            currentEnd = nextEnd
        }
    }

    merged.push([currentStart, currentEnd])

    return merged
};