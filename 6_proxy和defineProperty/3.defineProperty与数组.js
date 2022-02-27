let arr = [1, 2, 3]
let obj = {}

Object.defineProperty(obj, 'arr', {
    get() {
        console.log('get arr')
        return arr
    },
    set(newVal) {
        console.log('set', newVal)
        arr = newVal
    }
})

console.log(obj.arr)//输出get arr [1,2,3]  正常
obj.arr = [1, 2, 3, 4] //输出set [1,2,3,4] 正常
obj.arr.push(3) //输出get arr 不正常，监听不到push