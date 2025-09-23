/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const result = []
    const m = words.length
    if(m === 0) return result

    const wordLength = words[0].length 
    const totalLength = wordLength * m 
    if(s.length < totalLength) return result

    const targetFreq = new Map()

    for(const w of words) {
        targetFreq.set(w, (targetFreq.get(w) || 0) + 1)
    }

    for(let offset = 0; offset < wordLength; offset++) {
        let left = offset
        let right = offset
        let matchedWords = 0
        const windowFreq = new Map()

        while(right + wordLength <= s.length) {
            const word = s.slice(right, right + wordLength)
            right += wordLength

            if(!targetFreq.has(word)) {
                windowFreq.clear()
                matchedWords = 0
                left = right
                continue
            }

            windowFreq.set(word, (windowFreq.get(word) || 0) + 1)
            matchedWords++

            while(windowFreq.get(word) > targetFreq.get(word)) {
                const leftWord = s.slice(left, left + wordLength)
                windowFreq.set(leftWord, windowFreq.get(leftWord) - 1)
                matchedWords--
                left += wordLength
            }

            if(matchedWords === m) {
                result.push(left)

                const leftWord = s.slice(left, left + wordLength)
                windowFreq.set(leftWord, windowFreq.get(leftWord) - 1)
                matchedWords--
                left += wordLength
            }
        }


    }

    return result
};