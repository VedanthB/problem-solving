/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1)

    const m = nums1.length 
    const n = nums2.length 

    const half = Math.floor((m + n + 1) / 2)

    let left = 0
    let right = m

    while(left <= right) {
        const i = left + ((right - left) >> 1) 
        const j = half - i

        const nums1LeftMax = i > 0 ? nums1[i - 1] : -Infinity
        const nums1RightMin = i < m ? nums1[i] : Infinity
        const nums2LeftMax = j > 0 ? nums2[j - 1] : -Infinity
        const nums2RightMin = j < n ? nums2[j] : Infinity

        if(nums1LeftMax <= nums2RightMin && nums2LeftMax <= nums1RightMin) {
            if((m + n) % 2 === 1) {
                return Math.max(nums1LeftMax, nums2LeftMax) 
            } else {
                const leftMax = Math.max(nums1LeftMax, nums2LeftMax)
                const rightMin = Math.min(nums1RightMin, nums2RightMin)
                return (leftMax + rightMin) / 2
            }
        }

        if(nums1LeftMax > nums2RightMin) {
            right = i - 1
        } else {
            left = i + 1
        }
    }

    return 0
};