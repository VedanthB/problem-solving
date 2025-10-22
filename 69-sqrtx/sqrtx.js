/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x < 2) return x
    let r = x
    while(r > Math.floor(x / r)) {
        r = Math.floor((r + Math.floor(x /r)) / 2)
    }
    return r
};