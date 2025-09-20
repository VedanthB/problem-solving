/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const words = new Set(wordList)
    if(!words.has(endWord)) return 0
    words.add(beginWord)

    const list = Array.from(words)

    const indexMap = new Map(list.map((w, i) => [w, i]))
    const adj = Array.from({ length: list.length }, () => [])

    const differByOne = (a, b) => {
        let diff = 0
        for(let i = 0; i < a.length; i++) {
            if(a[i] !== b[i]) diff++

            if(diff > 1) return false
        }
        return diff === 1
    } 

    for(let i = 0; i < list.length; i++) {
        for(let j = i + 1; j < list.length; j++){
            if(differByOne(list[i], list[j])) {
                adj[i].push(j)
                adj[j].push(i)
            }
        }
    } 

    const startIndex = indexMap.get(beginWord)
    const targetIndex = indexMap.get(endWord)
    const queue = [startIndex]
    const dist = new Array(list.length).fill(-1)
    let head = 0
    dist[startIndex] = 1

    while(head < queue.length) {
        const currentIndex = queue[head++]
        if(currentIndex === targetIndex) return dist[currentIndex]
        for(const nei of adj[currentIndex]) {
            if(dist[nei] !== -1) continue
            dist[nei] = dist[currentIndex] + 1
            queue.push(nei)
        }
    }

    return 0
};