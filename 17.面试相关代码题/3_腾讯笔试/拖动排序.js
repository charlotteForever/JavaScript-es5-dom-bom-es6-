let arr = [['a', 1], ['b', 3], ['c', 6], ['d', 8], ['e', 9], ['f', 19]]
let info = ['b', '0', 'a']
let target = 0
let start = 0
// 找到开始的地方
// 如果是向下拉，那么从0开始都要变
// 如果是向上推，那么从2开始都要变
arr.forEach((el, index) => {
    if (el[0] === info[0]) {
        target = index
    } else if (el[0] === info[1]) {
        start = index
    }
})
console.log(target, start)
// 向下拉
if (target < start) {
    for (let i = target; i < start; i++) {
        arr[i][0] = arr[i + 1][0]
    }
    arr[start][0] = info[0]
}
// 向上推
else if (target > start) {
    for (let i = target; i >= start + 1; i--) {
        arr[i][0] = arr[i - 1][0]
    }
    arr[start][0] = info[0]
}

console.log(arr)