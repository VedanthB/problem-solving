/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    const MOD = 1e9 + 7
    const n = arr.length 
    const prevLess = Array(n).fill(-1)
    const nextLessEqual = Array(n).fill(n)

    let stack = []
    for(let i = 0; i < n; i++) {
        while(stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop()
        }
        prevLess[i] = stack.length ? stack[stack.length - 1] : -1
        stack.push(i)
    }

    stack = []
    for(let i = n - 1; i >= 0; i--) {
        while(stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
            stack.pop()
        }
        nextLessEqual[i] = stack.length ? stack[stack.length - 1] : n
        stack.push(i)
    }

    let total = 0

    for(let i = 0; i < n; i++){
        const left = i - prevLess[i]
        const right = nextLessEqual[i] - i
        const val = arr[i]

        total += val * left * right % MOD

    }

    return total % MOD
};