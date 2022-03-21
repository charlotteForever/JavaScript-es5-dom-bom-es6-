var merge = function (nums1, m, nums2, n) {
    // 双指针法 
    if (m === 0 || n === 0) {
        // 没有第二个参数，会默认取到末尾
        nums1 = m === 0 ? nums1.concat(nums2).slice(1) : nums1.concat(nums2)
        // nums1 = nums1.concat(nums2).slice(1)
        console.log(nums1)
    }
    else {
        let p1 = m - 1
        let p2 = n - 1
        for (let i = m + n - 1; i >= 0; i--) {
            if (nums1[p1] >= nums2[p2]) {
                nums1[i] = nums1[p1]
                p1--
            } else if (nums1[p1] < nums2[p2]) {
                nums1[i] = nums2[p2]
                p2--
            }
        }
    }
};
merge([1], 1, [], 0)
// merge([0], 0, [1], 1)