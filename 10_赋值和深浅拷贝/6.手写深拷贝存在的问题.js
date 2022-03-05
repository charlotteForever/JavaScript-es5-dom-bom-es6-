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
// 当person1中存在对自身的引用,在进行拷贝时，person2的person属性为person1,person1的person属性还是person1，如此循环，造成循环引用
person1.person = person1

// 接下来对代码进行优化,每次进入deepClone函数时，传入一个map对象，开辟一块存储空间来存储已经拷贝过的对象
function deepClone(target, map = new Map()) {
    let result;
    if (typeof target === 'object') {
        // 如果之前拷贝过target，查找后直接返回
        if (map.get(target)) {
            return map.get(target)
        }
        // 如果没拷贝过，将当前对象作为key，克隆对象作为value进行存储
        // result是引用，虽然当前为空，之后会随着赋值而改变
        map.set(target, result)
        if (Array.isArray(target)) {
            result = []
            // for in的k是对象的下标
            for (let k in target) {
                result.push(deepClone(target[k], map))
            }
        }
        else if (target === null) {
            result = target
        }
        else if (target.constructor === RegExp) {
            result = target
        }
        else {
            result = {}
            // for in的k是对象的key
            for (let k in target) {
                // 递归,以防对象的属性为引用数据类型
                result[k] = deepClone(target[k], map)
            }
        }
    } else {
        result = target
    }
    return result
}

// let person2 = deepClone(person1)
// console.log(person2)
// function clone(target, map = new Map()) {
//     if (typeof target === 'object') {
//         let cloneTarget = Array.isArray(target) ? [] : {};
//         if (map.get(target)) {
//             return map.get(target);
//         }
//         map.set(target, cloneTarget);
//         for (const key in target) {
//             cloneTarget[key] = clone(target[key], map);
//         }
//         return cloneTarget;
//     } else {
//         return target;
//     }
// };

let person2 = deepClone(person1)
console.log(person2)
