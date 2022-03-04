let person1 = {
    name: '花花',
    children: {
        school: '翻斗幼儿园'
    },
    // 增加一个函数
    demo() {
        console.log(`我是${name}`)
    },
    // 正则
    reg: /a/i
}
let person2 = JSON.parse(JSON.stringify(person1))//深拷贝

person1.name = '猪猪'
person1.children.school = '小猪幼儿园'

console.log(person1, '\n', person2)
// { name: '猪猪', children: { school: '小猪幼儿园' }, demo: [Function: demo] },reg:/a/i
// person2: { name: '花花', children: { school: '翻斗幼儿园' } },, reg: {} }

// 总结：在拷贝正则or函数时,会失效