// @ts-ignore
// 用于合并多个promise
// 所有的都成功才最终的promise才成功
Promise.myAll = function (promises) {
    // 注意命名要区分
    return new Promise((rs, rj) => {
        // 用来计数
        let count = 0
        // 用来存放最终的结果
        let result = []
        const len = promises.length
        promises.forEach((p, i) => {
            // 遍历,为了防止promises中存在非promise类型的值
            Promise.resolve(p).then((res) => {
                // p的状态成功的话,就会进入res
                count += 1
                // 成功的promise对象的结果放到数组里面
                result[i] = res
                if (count === len) {
                    rs(result)
                }
                //监听promise数组中的失败情况/或者在上面用rej也可以
            }).catch(rj)
        })
    })
}