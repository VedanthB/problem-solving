/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const lines = []
    let i = 0
    const n = words.length 

    while(i < n) {
        let lineWords = []
        let lineLen = 0

        while(i < n) {
            const nextLen = words[i].length
            if(lineWords.length === 0) {
                if(nextLen <= maxWidth) {
                    lineWords.push(words[i])
                    lineLen += nextLen
                    i++
                } else {
                    lineWords.push(words[i++])
                    break
                }
            } else {
                if(lineLen + 1 + nextLen <= maxWidth) {
                    lineWords.push(words[i])
                    lineLen += 1 + nextLen
                    i++
                } else {
                    break
                }
            }
        }

        const isLastLine = i === words.length 

        if(isLastLine || lineWords.length === 1) {
            let s = lineWords.join(" ")
            s += ' '.repeat(maxWidth - s.length)
            lines.push(s)
        } else {
            const letters = lineWords.reduce((sum, w) => sum + w.length, 0)

            let spacesToAdd = maxWidth - letters
            const gaps = lineWords.length - 1
            const gapsArr = new Array(gaps).fill(1)

            spacesToAdd -= gaps

            let g = 0
            while(spacesToAdd > 0) {
                gapsArr[g]++
                spacesToAdd--
                g = (g + 1) % gaps
            }

            let s = '';
            for(let k = 0; k < lineWords.length; k++) {
                s += lineWords[k]
                if(k < gaps) s += ' '.repeat(gapsArr[k])
            }
            lines.push(s)
        }
    }

    return lines
};