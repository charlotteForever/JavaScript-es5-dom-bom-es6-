// 每一次运行，会将先前元素的计算结果作为参数传入，
// 最后将其结果汇总为单个返回值。
const arr = [1, 2, 3, 4]
// 初始的pre值为0
const initialValue = 0
// 最终的return值为sum
const sum = arr.reduce((pre, cur) => {
    return pre + cur
}, initialValue)
console.log(sum)