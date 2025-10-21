/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let i = a.length - 1
  let j = b.length - 1

  let carry = 0
  const output = []

  while(i >= 0 || j >= 0 || carry != 0) {
    const bitA = i >= 0 ? a.charCodeAt(i) - 48 : 0
    const bitB = j >= 0 ? b.charCodeAt(j) - 48 : 0

    const total = bitA + bitB + carry
    output.push((total & 1).toString())
    carry = total > 1 ? 1 : 0

    i--; j--
  }  

  output.reverse()
  return output.join("")
};