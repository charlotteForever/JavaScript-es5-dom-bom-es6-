let person = {
    age: 0,
    school: '西电',
    children: {
        name: '小明'
    }
}
let hander = {
    get(obj, key) {
        return key in obj ? obj[key] : 66
    }, set(obj, key, val) {
        obj[key] = val
    }
}
let proxyObj = new Proxy(person, hander)

// 测试get
console.log(proxyObj.children.name)//输出：小明
console.log(proxyObj.children.height)//输出：undefined
// 测试set
proxyObj.children.name = '菜菜'
console.log(proxyObj.children.name)//输出: 菜菜
