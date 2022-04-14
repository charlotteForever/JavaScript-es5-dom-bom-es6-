"use strict"
// 没被优化
// const sum = (n) => {
//     if (n < 1) return n
//     return n + sum(n - 1)
// }

const sum = (n, preSum = 0) => {
    if (n <= 1) return n + preSum
    else {
        // 现在的sum是preSum+n，递归算n-1的sum
        return sum(n - 1, preSum + n)
    }
}
console.log(sum(500000))