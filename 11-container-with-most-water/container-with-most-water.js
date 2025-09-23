/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let best = 0

    while(left < right) {
        const width = right - left
        const leftH = height[left]
        const rightH = height[right]
        const area = width * Math.min(leftH, rightH)

        if(area > best) best = area

        if(leftH <= rightH) {
            left++
        } else {
            right--
        }
    }

    return best
};