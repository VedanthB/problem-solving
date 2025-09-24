/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let runningResult = 0
    let currentNumber = 0
    let currentSign = 1
    const stack = []

    function flushNumber() {
        runningResult += currentSign * currentNumber
        currentNumber = 0
    }

    for(let i = 0; i < s.length; i++) {
        const ch = s[i]

        if(ch === ' ') continue

        if(ch >= '0' && ch <= '9') {
            currentNumber = currentNumber * 10 + Number(ch) // or +ch
            continue
        }

        if(ch === "+" || ch === "-") {
            flushNumber()
            currentSign = (ch === '+') ? 1 : -1
            continue
        }

        if(ch === '(') {
            stack.push([runningResult, currentSign])
            runningResult = 0
            currentSign = 1
            continue
        }

        if(ch === ')') {
            flushNumber()
            const [prevResult, prevSign] = stack.pop()
            runningResult = prevResult + prevSign * runningResult
            continue
        }
    }

    flushNumber()
    return runningResult
};