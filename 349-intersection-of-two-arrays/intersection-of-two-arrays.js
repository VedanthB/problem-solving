/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)

    const result = []
    let i = 0, j = 0

    const n = nums1.length, m = nums2.length 

    while(i < nums1.length && j < nums2.length) {
        const a = nums1[i], b = nums2[j]
        
        if(a === b) {
            if(result.length === 0 || result[result.length - 1] !== a) 
            result.push(a)
            i++
            j++
        } else if(b < a) {
            j++
        } else {
            i++
        }
        
    }

    return result
};