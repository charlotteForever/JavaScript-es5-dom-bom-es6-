function func(num) {
    let str = num + ""
    let arr = []
    // 如果边界有等于零，会取到一个空字符
    for (let i = str.length; i >= 0; i -= 3) {
        arr.unshift(str.substring(i - 3, i))
        // console.log(arr, i)
    }
    console.log(arr)
    return arr.join(',')
}
console.log(func(112312197981))