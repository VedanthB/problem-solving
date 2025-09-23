/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(ransomNote.length > magazine.length) return false

    const count = new Array(26).fill(0)
    const base = 'a'.charCodeAt(0)

    for(const ch of magazine) {
        count[ch.charCodeAt(0) - base]++ 
    }

    for(const ch of ransomNote) {
        count[ch.charCodeAt(0) - base]--

         if(count[ch.charCodeAt(0) - base] < 0) return false
    }

    return true
};