const util = require('util')
const fs = require('fs')

// readFile函数不加括号
// 自动封装，返回一个promise类型的对象 
let myReadFile = util.promisify(fs.readFile)
myReadFile('./5_promise/resource/content.txt').then(value => {
    console.log(value.toString())
})