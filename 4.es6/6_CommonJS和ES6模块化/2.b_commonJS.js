//导入a模块
let mod = require('./1.a_commonJS')
console.log('b.js-1', mod.count)//输出b.js-1 0
mod.plusCount()// 调用之后，b模块的count不受影响，a的count发生改变
console.log('b.js-2', mod.count)//输出b.js-2 0
mod.count = 4// 手动对count进行赋值
console.log('b.js-3', mod.count)//输出 b.js-3 4

// 最后还会输出：a.js  1