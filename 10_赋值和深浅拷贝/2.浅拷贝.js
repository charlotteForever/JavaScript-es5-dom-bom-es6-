// 利用Object.assign
// 两个参数:1.target为目标对象 2.被拷贝对象，把被拷贝对象的可枚举属性添加到target身上，并返回target
let person1 = {
    name: '花花',
    children: {
        school: '翻斗幼儿园'
    }
}

let person2 = Object.assign({}, person1)//浅拷贝

person1.name = '猪猪'
person1.children.school = '小猪幼儿园'
console.log(person1, '\n', person2)
//person1: { name: '猪猪', children: { school: '小猪幼儿园' } } 
//person2: { name: '花花', children: { school: '小猪幼儿园' } }

// 总结：
// 对于基本数据类型，拷贝基本类型的值，源属性改变不影响该属性的值
// 对于引用数据类型：拷贝的是源对象的引用，源对象改变跟着改变

