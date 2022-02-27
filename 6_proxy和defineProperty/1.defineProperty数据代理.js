// 实现简单的数据代理
// person2的schoo属性，由person1代理
let person1 = { school: '西电' }
let person2 = {}
Object.defineProperty(person2, 'school', {
    get: function () {
        // person1的school的值作为person2的school值
        return person1.school
    },
    set: function (val) {
        // 修改person2的school值时，也就是修改person1的school值
        console.log(`监听到了person2的school属性的修改,新值为${val}`)
        person1.school = val
        // 此处可以进行渲染操作
    }
})
// 触发get
console.log(person2.school)
// 触发set
person2.school = '清华'
console.log(person1.school)
console.log(person2.school)


