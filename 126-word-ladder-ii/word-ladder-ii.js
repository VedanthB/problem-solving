/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    const words = new Set(wordList)
    if(!words.has(endWord)) return []
    words.add(beginWord)

    const L = beginWord.length 
    
    const buckets = new Map()

    const addPatterns = (word) => {
        for(let i = 0; i < L; i++) {
            const pattern = word.slice(0, i) + "*" + word.slice(i + 1)
            if(!buckets.has(pattern)) buckets.set(pattern, [])

            buckets.get(pattern).push(word)
        }
    }

    for(const w of words) addPatterns(w)

    const dist = new Map()
    const preds = new Map()

    for(const w of words) preds.set(w, new Set())

    let head = 0
    const queue = []
    dist.set(beginWord, 0);
    queue.push(beginWord);
    let foundTarget = Infinity

    while(head < queue.length) {
        const word = queue[head++]

        const d = dist.get(word)

        if(d > foundTarget) break

        for(let i = 0; i < L; i++) {
            const p = word.slice(0, i) + "*" + word.slice(i + 1)
            const neighbours = buckets.get(p) || []

            for(const nei of neighbours) {
                if(!dist.has(nei)) {
                    dist.set(nei, d + 1)
                    preds.get(nei).add(word)
                    queue.push(nei)

                    if(nei === endWord)  foundTarget = d + 1
                } else if (dist.get(nei) === d + 1) {
                
                    preds.get(nei).add(word);
                }
            }
        }
    }

    if(!dist.has(endWord)) return []

    const result = []
    const path = []

    function dfs(word) {
        path.push(word)
        if(word === beginWord) {
            result.push([...path].reverse())
            path.pop()
            return 
        }  

        for(const prev of preds.get(word)) dfs(prev)
        path.pop()
    }

    dfs(endWord)

    return result
};