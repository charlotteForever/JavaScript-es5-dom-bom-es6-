var permute = function (nums) {
    let result = []
    let path = []
    backtracing(nums, nums.length, [])
    return result
    function backtracing(arr, n, used) {
        if (path.length === n) {
            result.push(Array.from(path))
            return;
        }
        for (let i = 0; i < n; i++) {
            // 找到一个没有被用到过的数字
            // 考虑到刚开始used可能不存在
            if (used[i]) continue
            path.push(arr[i])
            used[i] = true
            backtracing(arr, n, used)
            path.pop()
            used[i] = false

        }
    }
};