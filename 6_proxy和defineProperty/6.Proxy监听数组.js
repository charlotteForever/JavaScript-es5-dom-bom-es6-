let subject = ['高数']
let handler = {
    get(obj, key) {
        return key in obj ? obj[key] : '没有这门学科'
    }, set(obj, key, val) {
        obj[key] = val
    }
}
let proxyObj = new Proxy(subject, handler)

// 检验get和set
console.log(subject[0])//输出高数
subject[0] = '大学物理'
console.log(subject[0])//输出大学物理
// 检验push增加的元素能否被监听
subject.push('线性代数')
console.log(subject[1])//输出线性代数

subject.pop()//删除最后一个元素
console.log(subject.at(-1))//输出大学物理

