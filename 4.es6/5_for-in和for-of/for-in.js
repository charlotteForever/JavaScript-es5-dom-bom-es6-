// 遍历数组 输出数组下标和name或value属性，也能获取到添加在原型对象上的函数
let arr = ['lihua', 'xiaohong', 'xiaoming']
arr.name = '数组'
Array.prototype.test = function () {
}
// for in和for of遍历数组，不仅能获取到下标，也能获取到添加的name或value属性，也能获取到添加在原型对象上的函数
for (index in arr) {
    console.log(index)
}
for (index in arr) {
    if (arr.hasOwnProperty(index)) {
        console.log(index + '@')
    }
}

// 遍历对象 输出key的值
let obj = {
    name: 'lihua',
    age: 19,
    sex: '男'
}
for (index in obj) {
    console.log(index)
}