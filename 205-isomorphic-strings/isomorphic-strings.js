/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const mapS = new Array(128).fill(0)
    const mapT = new Array(128).fill(0)

    for(let i = 0; i < s.length; i++) {
        const codeS = s.charCodeAt(i)
        const codeT = t.charCodeAt(i)

        if(mapS[codeS] !== mapT[codeT]) return false

        mapS[codeS] = i + 1
        mapT[codeT] = i + 1
    }

    return true
};