// num = 1234
// let arr = (num + '').split('')
// console.log(arr)//[ '1', '2', '3', '4' ]
// console.log(arr.map(Number))//[ 1, 2, 3, 4 ]
// arr.map(Number)
// console.log(arr)//[ '1', '2', '3', '4' ]
num = 1234
let arr = (num + '').split('')
// 转为数字数组
arr = arr.map(Number).sort((a, b) => {
    return b - a
})
console.log(arr)

// // 替换
// arr[arr.indexOf(max)] = min
// arr[arr.indexOf(min)] = max
// arr.join('')