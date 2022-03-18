function deepClone() {
    let result = {}
    if (obj && typeof obj === 'object') {
        // 如果是数组
        if (Array.isArray(obj)) {
            for (let i in obj) {
                result[i] = obj[i]
            }
        }
        // 如果是函数
        else if (obj instanceof function) {

        }
        // 如果是对象
        else if (obj)
    } else {
        return obj
    }
}
let obj = { a: 1, b: 2, c: { f: 2 } }
