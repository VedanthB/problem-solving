/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const dictionary = new Set(wordList)

    if(!dictionary.has(endWord)) return 0

    const visited = new Set([beginWord])
    const queue = [[beginWord, 1]]
    
    while(queue.length) {
        const [word, length] = queue.shift()

        if(word === endWord) return length

        const chars = word.split("")

        for(let i = 0; i < chars.length; i++) {
            const og = chars[i]

            for(let code = 97; code <= 122; code++) {
                const nextChar = String.fromCharCode(code)
                if(nextChar === og) continue

                chars[i] = nextChar
                const mutated = chars.join("")
                chars[i] = og

                if(dictionary.has(mutated) && !visited.has(mutated)) {
                    visited.add(mutated)
                    queue.push([mutated, length + 1])
                }
            }
        } 
    }

    return 0
};