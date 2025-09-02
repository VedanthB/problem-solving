/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    const n = bloomDay.length 

    if(m * k > n) return -1

    let low = Infinity
    let high = -Infinity

    for(const day of bloomDay) {
        if(day < low) low = day
        if(day > high) high = day
    }

    function canMakeBouqets(days) {
        let bloomed = 0, bouqetCount = 0

        for(const day of bloomDay) {
            if(day <= days) {
                bloomed += 1

                if(bloomed === k) {
                    bouqetCount += 1
                    bloomed = 0
                    if(bouqetCount > m) return true
                }
            } else {
                bloomed = 0
            }
        }

        return bouqetCount >= m
    }

    while(low < high) {
        const mid = Math.floor((low + high) / 2)

        if(canMakeBouqets(mid)) {
            high = mid
        } else {
            low = mid + 1
        }
    }

    return low 
};