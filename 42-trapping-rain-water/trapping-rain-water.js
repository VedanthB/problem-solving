/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const n = height.length
    if(n < 3) return 0

    let left = 0
    let right = n - 1
    let leftmax = 0
    let rightmax = 0
    let total = 0

    while(left <= right) {
        leftmax = Math.max(leftmax, height[left])
        rightmax = Math.max(rightmax, height[right])

        if(leftmax <= rightmax) {
            total += leftmax - height[left]
            left++
        } else {
            total += rightmax - height[right]
            right--
        }
    }

    return total
};