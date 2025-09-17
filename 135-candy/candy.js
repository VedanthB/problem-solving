/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const n = ratings.length
    if(n === 0) return 0

    const candies = Array(n).fill(1)
    let changed = true

    while(changed) {
        changed = false

        for(let i = 0; i < n; i++) {
            if(i > 0 && ratings[i] > ratings[i - 1] && candies[i] <= candies[i - 1]) {
                candies[i] = candies[i - 1] + 1
                changed = true
            }

             if(i + 1 < n && ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
                candies[i] = candies[i + 1] + 1
                changed = true
            }
        }
    }

    return candies.reduce((a, b) => a + b, 0)
};