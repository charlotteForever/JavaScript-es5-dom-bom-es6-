let n = 4
let arr = [2, 3, 1, 4]
let sum = 0
arr.forEach((el) => sum += el)
// 这一重循环代表两个指针之间的距离
for (let i = 2; i < n; i += 2) {
    let start = 0
    let end = start + i
    while (end < n) {
        // 重新创造一个arr
        let arr1 = arr.slice(start, end + 1)
        arr1.sort((a, b) => a - b)
        sum += arr1[Math.floor((i + 1) / 2)]
        start++
        end++
    }
}
console.log(sum)