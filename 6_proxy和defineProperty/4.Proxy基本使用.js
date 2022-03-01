let person = {
    age: 0,
    school: '西电'
}
// 
let hander = {
    get(obj, key) {
        // 如果对象里有这个属性，就返回属性值，如果没有，就返回默认值66
        return key in obj ? obj[key] : 66
    }, set(obj, key, val) {
        obj[key] = val
        return true
    }
}
let proxyObj = new Proxy(person, hander)

// 测试get能否拦截成功
console.log(proxyObj.age)//输出0
console.log(proxyObj.school)//输出西电
console.log(proxyObj.name)//输出默认值66

// 测试set能否拦截成功
proxyObj.age = 18
console.log(proxyObj.age)//输出18 修改成功