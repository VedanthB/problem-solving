/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const thousands = ["", "M", "MM", "MMM"]
    const hundreds  = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
    const tens      = ["", "X", "XX",   "XXX",  "XL", "L", "LX", "LXX", "LXXX", "XC"]
    const ones      = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]

    const t = Math.floor(num / 1000)
    const h = Math.floor((num % 1000 / 100))
    const te = Math.floor((num % 100 / 10))
    const o = num % 10 

    return thousands[t] + hundreds[h] + tens[te] + ones[o]
};