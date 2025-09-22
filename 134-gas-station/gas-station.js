/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    const n = gas.length 

    let startIndex = 0
    let currentFuel = 0
    let totalBalance = 0

    for(let i = 0; i < n; i++) {
        const delta = gas[i] - cost[i]
        totalBalance += delta
        currentFuel += delta


        if(currentFuel < 0) {
            startIndex = i + 1
            currentFuel = 0
        }
    }

    return totalBalance >= 0 ? (startIndex % n) : -1
};