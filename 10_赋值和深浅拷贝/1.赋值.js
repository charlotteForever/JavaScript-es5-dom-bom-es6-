let person1 = {
    name: '小明',
    children: {
        school: '蹲蹲'
    }
}
let person2 = person1//直接赋值
person2.name = '李华'
person2.children.school = '起起'

console.log(person1, '\n', person2)//person1和person2的name和children下的school都变了

// 总结：
// 对于基本数据类型和引用数据类型，拷贝的都是引用，源属性改变，跟着改变