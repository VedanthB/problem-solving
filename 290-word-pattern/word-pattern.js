/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(" ")
    if (words.length !== pattern.length) return false;

    const wordMap = new Map()
    const patternMap = new Map()

    for(let i = 0; i < pattern.length; i++) {
        const word = words[i]
        const letter = pattern[i]

        if(wordMap.has(word) && wordMap.get(word) != letter) return false
        if(patternMap.has(letter) && patternMap.get(letter) != word) return false

        wordMap.set(word, letter)
        patternMap.set(letter, word)
    }

    return true
};