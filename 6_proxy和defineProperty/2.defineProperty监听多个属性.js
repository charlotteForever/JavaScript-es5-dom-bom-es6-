let person = {
    name: '',
    age: 0,
    children: {
        school: '西电'
    }
}


// 实现一个响应式函数
function defineProperty(obj, key, val) {
    observer(key)
    Object.defineProperty(obj, key, {
        get() {
            console.log(`访问了${key}属性`)
            return val
        },
        set(newVal) {
            // 如果newVal是一个对象，递归进入该对象进行监听
            observer(newVal)
            console.log(`${key}属性被修改为${newVal}了`)
            val = newVal
        }
    })
}
// 实现一个遍历函数Observer
function observer(obj) {
    if (typeof obj !== 'object' || obj == null) {
        return
    }
    // for (key in obj) {
    Object.keys(obj).forEach((key) => {
        defineProperty(obj, key, obj[key])
    })
    // }
}
observer(person)
console.log(person.age)
person.age = 18
console.log(person.age)

console.log(person.children.school)





















// 拿到person的每个属性名组成的字符数组，对数组的每一个元素：
// Object.keys(person).forEach(function (key) {
//     Object.defineProperty(person, key, {
//         enumerable: true,
//         configurable: true,
//         // 默认会传入this
//         get() {
//             // console.log('hah')
//             // 访问person[key]也会触发get方法，导致循环调用
//             return person[key]
//         },
//         set(val) {
//             console.log(`对person中的${key}属性进行了修改`)
//             person[key] = val
//             // 修改之后可以执行渲染操作
//         }
//     })
// })
// // person.name = 'liming'
// console.log(person.age)
