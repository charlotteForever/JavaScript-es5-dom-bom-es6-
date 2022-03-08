function myFunc(num) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(num * 2)
        }, 1000)
    })
}

// 嵌套多了不雅观
myFunc(1).then(res => {
    console.log(res)
    // 把前面promise的值，作为下一个promise的参数
    myFunc(res).then(res2 => {
        console.log(res2)
    })
})