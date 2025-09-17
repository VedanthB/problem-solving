/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let left = 0
    let best = 0
    let countMap = new Map()

    for(let right = 0; right < fruits.length; right++){
        const rightKind = fruits[right]
        countMap.set(rightKind, (countMap.get(rightKind) || 0) + 1)

        while(countMap.size > 2) {
            const leftKind = fruits[left] 
            const leftCount = countMap.get(leftKind) - 1
            if(leftCount === 0) countMap.delete(leftKind)
            else  countMap.set(leftKind, leftCount)
            left++
        }  

        const curLen = right - left + 1

        if(curLen > best) best = curLen
    }

    return best
};