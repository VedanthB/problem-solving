/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    function canMake(day) {
        let bouquets = 0
        let flowers = 0

        for(let bloom of bloomDay) {
            if(bloom <= day) {
                flowers++
                if(flowers === k) {
                    bouquets++
                    flowers = 0
                }
            } else {
                flowers = 0
            }
        }

        return bouquets >= m
    }

    let left = 1, right = Math.max(...bloomDay), answer = -1

    while(left <= right) {
        const mid = left + ((right - left) >> 1)

        if(canMake(mid)) {
            answer = mid
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return answer
};