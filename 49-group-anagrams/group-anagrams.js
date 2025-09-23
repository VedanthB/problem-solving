/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const groups = new Map()

    const base = 'a'.charCodeAt(0)

    for(const word of strs) {
        const counts = new Array(26).fill(0)

        for(let i = 0; i < word.length; i++) {
            counts[word.charCodeAt(i) - base]++
        }

        const key = counts.join("#")

        if(!groups.has(key)) groups.set(key, [])
        groups.get(key).push(word)
    }

    return Array.from(groups.values())
};