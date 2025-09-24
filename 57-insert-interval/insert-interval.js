/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    // if(intervals.length === 0) return []

    const sorted = intervals.slice()
    sorted.push(newInterval)
    sorted.sort((a, b) => a[0] - b[0])

    let [currentStart, currentEnd] = sorted[0]

    const merged = []

    for(let i = 1; i < sorted.length; i++) {
        const [newStart, newEnd] = sorted[i]

        if(newStart <= currentEnd) {
            currentEnd = Math.max(newEnd, currentEnd)
        } else {
            merged.push([currentStart, currentEnd])
            currentStart = newStart
            currentEnd = newEnd
        }
    }

    merged.push([currentStart, currentEnd])
    return merged
};