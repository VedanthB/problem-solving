/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const n = height.length
    if(n < 3) return 0

    const leftmax = Array(n).fill(0)
    const rightmax = Array(n).fill(0)

    leftmax[0] = height[0]
    for(let i = 1; i < n; i++) {
        leftmax[i] = Math.max(leftmax[i - 1], height[i])
    }

    rightmax[n - 1] = height[n - 1] 
    for(let i = n - 2; i >= 0; i--) {
        rightmax[i] = Math.max(rightmax[i + 1], height[i])
    }

    let total = 0
    for(let i = 0; i < n; i++) {
        const waterhere = Math.min(leftmax[i], rightmax[i]) - height[i]

        if(waterhere > 0) total += waterhere
    }

    return total
};