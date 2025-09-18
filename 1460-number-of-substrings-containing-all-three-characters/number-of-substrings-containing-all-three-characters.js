/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    const seen = { a: -1, b: -1, c: -1 }
    let total = 0

    for(let i = 0; i < s.length ; i++) {
        seen[s[i]] = i

        if(seen.a !== -1 && seen.b !== -1 && seen.c !== -1) {
            total += 1 + Math.min(seen.a, seen.b, seen.c)
        }
    }

    return total
};