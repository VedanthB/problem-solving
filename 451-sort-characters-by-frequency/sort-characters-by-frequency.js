/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const freqMap = {}

    for(const ch of s) {
        freqMap[ch] = (freqMap[ch] || 0) + 1
    }

    const charCountArr = Object.entries(freqMap)

    charCountArr.sort((a, b) => {
        const [charA, countA] = a
        const [charB, countB] = b

        if(countB !== countA) return countB - countA

        return charA.localeCompare(charB)
    })

    return charCountArr.map(([char, count]) => char.repeat(count)).join('')
};