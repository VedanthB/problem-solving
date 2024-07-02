/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let N = nums1.length,  // Length of the first array
      M = nums2.length;  // Length of the second array

    if(N > M) return findMedianSortedArrays(nums2, nums1)

    let totalLength = M + N  
    let noOfLeftElements = Math.floor((totalLength + 1) / 2)   

    let low = 0 
    let high = N

    while(low <= high) {
        let mid1 = Math.floor((low + high) / 2)
        let mid2 = noOfLeftElements - mid1

        let l1 = -Infinity
        let l2 = -Infinity
        let r1 = Infinity
        let r2 = Infinity
        
        if(mid1 - 1 >= 0) l1 = nums1[mid1 - 1]
        if(mid2 - 1 >= 0) l2 = nums2[mid2 - 1]
        if(mid1 < N) r1 = nums1[mid1]
        if(mid2 < M) r2 = nums2[mid2]

        if(l1 <= r2 && l2 <= r1) {
            if(totalLength % 2 === 1) {
                const median = Math.max(l1, l2)

                return median
            } else {
                const median = Math.max(l1, l2) + Math.min(r1,r2)

                return median / 2
            }
        } else if (l1 > r2) {
            high = mid1 - 1
        } else {
            low = mid1 + 1
        }
    }

    return 0
};