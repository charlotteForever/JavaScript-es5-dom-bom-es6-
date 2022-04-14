// 从输入的一半开始往前遍历，如果是素数，就算差然后判断是不是素数
let n = 7
// 标识位
let flag = 0
for (let i = Math.ceil(n / 2); i > 2; i--) {
    if (isPrime(i) === true && isPrime(n - i) === true) {
        flag = 1
        console.log(i, n - i)
        break
    }
}
if (flag === 0) {
    console.log(0)
}

function isPrime(n) {
    let i = 2
    while (i <= n / 2) {
        if (n % i === 0) {
            return false
        }
        i++
    }
    return true
}