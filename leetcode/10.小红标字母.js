let str = 'baccccb'
let strCode = []
for (let i = 0; i < str.length; i++) {
    strCode.push(str.charCodeAt(i) - 96)
}
// 记录任意两个可组合的长度
let dp = []
dp[0] = 1
for (let i = 1; i < strCode.length; i++) {
    // 如果当前字母和之前的字母相同或者相邻，
    if (strCode[i] === strCode[i - 1] || (Math.abs(strCode[i] - strCode[i - 1]) === 1)) {
        dp[i] = dp[i - 1] + 1
        // 置为0方便后续计算
        dp[i - 1] = 0
    } else {
        dp[i] = 1
    }
}
console.log(dp)
// 对于dp数组中的每一个大于1的，如果为偶数，则全部加起来；
// 如果为奇数，取区间里最小的，不加上，其他的都加上
let score = 0
for (let i = 0; i < dp.length; i++) {
    if (dp[i] > 1 && dp[i] % 2 === 0) {
        // 全部加起来
        score += strCode.slice(i - dp[i] + 1, i + 1).reduce((pre, cur) => pre + cur)

    } else if (dp[i] > 1 && dp[i] % 2 !== 0) {
        // 删去值最小的
        let substr = strCode.slice(i - dp[i] + 1, i + 1)
        // 从substr里面删除最小的
        substr[substr.indexOf(Math.min(...substr))] = 0
        console.log(substr)
        score += substr.reduce((pre, cur) => pre + cur)
    }
}
console.log(score)
