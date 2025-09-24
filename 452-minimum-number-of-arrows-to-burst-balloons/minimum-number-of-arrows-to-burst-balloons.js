/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if(!points || points.length === 0) return 0

    const sorted = points.slice().sort((a, b) => a[1] - b[1])

    let arrow = 0
    let currentArrow = -Infinity

    for(const [start, end] of sorted) {
        if(start > currentArrow) {
            arrow++
            currentArrow = end
        }
    }

    return arrow
};