let info = [4, 6]
let arr = []
// 把乘法表的结果储存在里面
for (let i = 1; i <= info[1]; i++) {
    arr.push(i * info[0] + '')
}
// 对每一个数进行翻转
arr.forEach((el, index) => {
    arr[index] = parseInt(el.split('').reverse().join(''))
})
console.log(arr)