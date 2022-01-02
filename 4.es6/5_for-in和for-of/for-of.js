//遍历数组 输出数组内容
let arr = ['lihua', 'xiaohong', 'xiaoming']
arr.name = '数组'
Array.prototype.test = function () {
}
for (v of arr) {
    console.log(v)
}

// 遍历对象 不可遍历对象，因为该对象不可遍历(not iterable)
let obj = {
    name: 'lihua',
    age: 19,
    sex: '男'
}
for (v of obj) {
    console.log(v)
}
// 一个数据结构只要部署了Symbol.iterator 属性, 就具有 iterator接口, 可以使用 for of循环。
// 数组 Array Map Set String arguments对象，同样也可以解构赋值，剩余参数