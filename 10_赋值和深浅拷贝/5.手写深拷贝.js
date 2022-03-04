let person1 = {
    name: '花花',
    children: {
        school: '翻斗幼儿园'
    },
    demo() {
        console.log(`我是${name}`)
    },
    reg: /a/i,
    address: null,
    hobby: ['吃饭', '睡觉', 'coding']
}

function deepClone(target) {
    let result;
    // 如果typeof是对象,可能是:[],{},null
    if (typeof target === 'object') {
        // 如果是数组
        if (Array.isArray(target)) {
            result = []
            // for in的k是对象的下标
            for (let k in target) {
                // 递归,以防数组的某个值为引用数据类型
                result.push(deepClone(target[k]))
            }
            return result
        }
        // 如果是null,直接返回
        else if (target === null) {
            return target
        }
        // 如果是正则
        else if (target.constructor === RegExp) {
            return target
        }
        // 如果是纯对象
        else {
            result = {}
            // for in的k是对象的key
            for (let k in target) {
                // 递归,以防对象的属性为引用数据类型
                result[k] = deepClone(target[k])
            }
        }
    } else {
        // 如果不是对象直接返回target
        return target
    }
    return result
}

let person2 = deepClone(person1)
console.log(person2)
