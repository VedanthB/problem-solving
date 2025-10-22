/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length <= 1) return s

    const t = ['^']
    for(const ch of s) t.push("#", ch)
    t.push("#", "$")

    const p = new Array(t.length).fill(0)
    let C = 0, R = 0

    for(let i = 1; i < t.length - 1; i++) {
        const mirror = 2 * C - i
        if(i < R) p[i] = Math.min(R - i, p[mirror])

        while(t[i + 1 + p[i]] === t[i - 1 - p[i]]) p[i]++

        if(i + p[i] > R) {
            C = i
            R = i + p[i]
        }
    }

    let maxlen = 0, centerIndex = 0
    for(let i = 1; i < p.length - 1; i++) {
        if(p[i] > maxlen) {
            maxlen = p[i]
            centerIndex = i
        }
    }

    const start = Math.floor((centerIndex - maxlen) / 2);
    return s.slice(start, start + maxlen);
};