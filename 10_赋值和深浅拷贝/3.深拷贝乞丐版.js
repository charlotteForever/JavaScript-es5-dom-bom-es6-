// 利用JSON的API
let person1 = {
    name: '花花',
    children: {
        school: '翻斗幼儿园'
    }
}
let person2 = JSON.parse(JSON.stringify(person1))//深拷贝

person1.name = '猪猪'
person1.children.school = '小猪幼儿园'

console.log(person1, '\n', person2)
// person1:{ name: '猪猪', children: { school: '小猪幼儿园' } }
// person2: { name: '花花', children: { school: '翻斗幼儿园' } }

// 总结：使用这种方法，不管是基本数据类型还是引用数据类型，源属性的改变都无法对现在的属性产生影响

