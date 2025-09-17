/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let xorAll = 0
    for(const val of nums) {
        xorAll ^= val
    }

    const mask = xorAll & -xorAll

    let uniqueA = 0, uniqueB = 0
    for(const val of nums) {
        if(mask & val) uniqueA ^= val
        else uniqueB ^= val
    }


    return uniqueA < uniqueB ? [uniqueA, uniqueB] : [uniqueB, uniqueA]
};