/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = []

    const isOperator = (s) => s === "+" || s === "-" || s === "*" || s === '/'

    const applyOperator = (a, b, o) => {
        switch(o) {
            case '+': return a + b
            case '-': return a - b
            case '*': return a * b
            case '/': return Math.trunc(a / b)
        }
    }

    for(const token of tokens) {
        if(isOperator(token)) {
            const rightVal = stack.pop()
            const leftVal = stack.pop()
            stack.push(applyOperator(leftVal, rightVal, token))
        } else {
            stack.push(Number(token))
        }
    }

    return stack.pop()
};