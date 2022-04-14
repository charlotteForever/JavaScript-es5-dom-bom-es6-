var arr1 = [1, 2, [3], [1, 2, 3, [4, [2, 3, 4]]]];
// function flatten(arr) {
//     return arr.reduce((res, next) => {
//         return res.concat(Array.isArray(next) ? flatten(next) : next);
//     }, []);
// }
// console.log(flatten(arr1))


// reduce的第一个参数是一个回调函数
// 回调函数的第一个参数上一次调用reduce的返回值，
// 第二个参数是数组中正在被处理的元素
// 第三个参数是数组中正在处理的元素的索引
// 第四个参数是用于遍历的数组
// 第二个参数是出事的pre值
// 数组扁平化
function flatten(arr) {
    return arr.reduce((pre, cur) => {
        // why用concat？
        return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
    }, [])
}
console.log(flatten(arr1))
