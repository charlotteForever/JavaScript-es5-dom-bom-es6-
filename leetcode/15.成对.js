let N = 1
let testCase = [30]
// 求最大公约数
function GYS(a, b) {
    return a === 0 ? b : GYS(b % a, a)
}
function countPosibility(target) {
    let count = 0
    // 先找出所有的可能的组合,如果能除尽 且最大公约数为1，就count++
    for (let right = 1; right <= Math.floor(Math.pow(target, 0.5)); right++) {
        // 如果除不尽，continue
        if (target % right !== 0) {
            continue
        } else {
            // 如果能除尽，按条件对count进行操作
            let left = target / right
            count += GYS(right, left) === 1 ? 1 : 0
        }
    }
    return count
}
for (let i = 0; i < N; i++) {
    console.log(countPosibility(testCase[i]))
}
