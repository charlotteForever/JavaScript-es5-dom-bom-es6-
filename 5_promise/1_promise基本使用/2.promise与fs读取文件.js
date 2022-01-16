const fs = require('fs')

// fs.readFile('./5_promise/resource/content.txt', (err, data) => {
//     // 如果有错，抛出错误
//     if (err) throw err
//     // 否则输出
//     // console.log(data)//是buffer类型
//     console.log(data.toString())//转为字符串
// })

const p = new Promise((resolve, reject) => {
    fs.readFile('./5_promise/resource/content.txt', (err, data) => {
        if (err) reject(err)
        resolve(data)
    })
})
p.then(value => {
    console.log(value.toString())
}, reason => {
    console.log(reason)
})