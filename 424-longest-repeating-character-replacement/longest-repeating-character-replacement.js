/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    if (s.length === 0) return 0;


    const A_CODE = "A".charCodeAt(0)
    const freq = new Array(26).fill(0)

    let left = 0
    let maxFreq = 0
    let maxLen = 0

    for(let right = 0; right < s.length; right++) {
        const rightCh = s.charCodeAt(right) - A_CODE
        freq[rightCh]++

        if(freq[rightCh] > maxFreq) maxFreq = freq[rightCh]        

        while((right - left + 1) - maxFreq > k) {
            const leftCh = s.charCodeAt(left) - A_CODE
            freq[leftCh]--
            left++
        }

        const currLen = right - left + 1

        if(currLen > maxLen) maxLen = currLen
    }

    return maxLen
};