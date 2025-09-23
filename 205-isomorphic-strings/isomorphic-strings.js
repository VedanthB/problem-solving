/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const mapS = new Map()
    const mapT = new Map()

    for(let i = 0; i < s.length; i++) {
        const cs = s[i]
        const ct = t[i]

        if(mapS.has(cs) && mapS.get(cs) !== ct) return false
        if(mapT.has(ct) && mapT.get(ct) !== cs) return false

        mapS.set(cs, ct)
        mapT.set(ct, cs)
    }

    return true
};