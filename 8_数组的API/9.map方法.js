// 返回一个新数组，数组中的每个元素均是调用map中方法的return值
// let arr = [1, 2, 3, 4]
// let new_Arr = []
// new_Arr = arr.map((item) => {
//     return item * 2
// })
// console.log(new_Arr)

// 但是map无法实现过滤
let new_Arr = [1, 2, 3, 4, 5].map(item => { if (item > 3) return item })
console.log(new_Arr)
// [ undefined, undefined, undefined, 4, 5 ]

