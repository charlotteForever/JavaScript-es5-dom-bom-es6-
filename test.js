var lengthOfLIS = function (nums) {
    // dp数组的含义是包括当前数在内，可以形成的最长的子串
    let dp = [1]
    // 存储满足条件的dp最大值
    let max
    for (let i = 1; i < nums.length; i++) {
        max = 0
        // 遍历dp数组的前i个，找到小于当前数的数中，dp最大的
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i] && dp[j] > max) {
                max = dp[j]
            }
        }
        dp[i] = max + 1
    }
    return Math.max(...dp)
};
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]))