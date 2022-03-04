let person = {}
let personName = 'lihua'
//在person对象上添加属性name,值为personName
Object.defineProperty(person, 'namep', {
    //但是默认是不可枚举的(for in打印打印不出来)，可：enumerable: true
    //默认不可以修改，可：wirtable：true
    //默认不可以删除，可：configurable：true
    get: function () {
        console.log('触发了get方法')
        return personName
    },
    set: function (val) {
        console.log('触发了set方法')
        personName = val
    }
})
//当读取person对象的namp属性时，触发get方法
console.log(person.namep)
//当修改personName时，重新访问person.namep发现修改成功
personName = 'liming'
//检查后发现，修改成功了
console.log(person.namep)
// 对person.namep进行修改，触发set方法
person.namep = 'huahua'
console.log(person.namep)
