/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    const n = prices.length 
    if(n < 2 || k === 0) return 0

    
    if(k >= Math.floor(n / 2)) {
        let sum = 0
        for(let i = 1; i < n; i++) {
            if(prices[i] > prices[i - 1]) sum += prices[i] - prices[i - 1]
        }

        return sum
    }

    const buy = new Array(k + 1).fill(-Infinity)
    const sell = new Array(k + 1).fill(0)

    for(const price of prices) {
        for(let t = 1; t <= k; t++) {
            buy[t] = Math.max(buy[t], sell[t - 1] - price)
            sell[t] = Math.max(sell[t], buy[t] + price)
        }
    }

    return sell[k]
};