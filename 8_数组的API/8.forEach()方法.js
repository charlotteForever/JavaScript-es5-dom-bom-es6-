// 对arr中的每一个元素进行遍历，进行统计行的计算
// 当数组中元素是值类型，forEach绝对不会改变数组；当是引用类型，则可以改变数组
let arr = [1, 2, 4, 5, 2]
let arr_update = []
arr.forEach((item) => {
    if (item > 2) {
        arr_update.push(item)
    }
})
console.log(arr)
console.log(arr_update)