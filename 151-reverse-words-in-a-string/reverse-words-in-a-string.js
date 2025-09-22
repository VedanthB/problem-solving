/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const chars = Array.from(s)

    let write = 0
    let read = 0

    while(read < chars.length && chars[read] === ' ') read++

    while(read < chars.length) {
        while(read < chars.length && chars[read] !== ' ') {
            chars[write++] = chars[read++]
        }

        while(read < chars.length && chars[read] === ' ') read++

        if(read < chars.length) chars[write++] = ' '
    }

    chars.length = write 

    function reverse(arr, l, r) {
        while(l < r) {
            const temp = arr[l]
            arr[l] = arr[r]
            arr[r] = temp
            l++
            r--
        }
    }

    reverse(chars, 0, chars.length - 1)

    let start = 0
    for(let i = 0; i <= chars.length; i++) {
        if(i === chars.length || chars[i] === ' ') {
            reverse(chars, start, i - 1)
            start = i + 1
        }
    }

    return chars.join('')
};