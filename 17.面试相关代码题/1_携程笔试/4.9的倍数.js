let num = 1188 + ''
const arr = num.split('').map(Number).sort((a, b) => a - b)
const count = []
// 从m中取n个数
function compostion(m, n) {
    if (m < 0 || n < 0 || m < n) {
        return 0
    }
    n = n < (m - n) ? n : m - n
    if (n === 0) {
        return 1
    }
    let res = m
    for (let i = 2, j = res - 1; i <= n; i++, j--) {
        res = res * j / i
    }
    return res
}
// console.log(compostion(2, 1))
for (let i = 0; i < arr.length; i++) {
    // 先找到arr[i]，看有没有9-arr[i],有的话
    if (arr.indexOf(9 - arr[i]) !== -1) {
        let startIndex = arr.indexOf(9 - arr[i])
        let a1 = arr.slice(i, arr.lastIndexOf(arr[i]) + 1)
        let m = a1.length
        let a2 = arr.slice(startIndex, arr.lastIndexOf(arr[startIndex]) + 1)
        let n = a2.length
        count.push([m, n])
        i += m
    }
    // count.push(arr.slice(i, arr.lastIndexOf(arr[i]) + 1))
    // i += arr.lastIndexOf(arr[i]) - i
}
let res = 0
for (let i = 0; i < count.length; i++) {
    let p = Math.min(count[i][0], count[i][1])
    // 遍历每一个数
    while (p >= 0) {
        res += compostion(count[i][0], p) * compostion(count[i][1], p)
        p--
    }
}
console.log(res)