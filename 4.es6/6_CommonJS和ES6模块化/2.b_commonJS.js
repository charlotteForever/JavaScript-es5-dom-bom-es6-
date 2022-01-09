//导入a模块
let mod = require('./1.a_commonJS')
// mod.countPlus();
console.log('b.js-1', mod.count)//输出b.js-1 0
// 调用之后，b模块的count不受影响
mod.plusCount()
console.log('b.js-2', mod.count)//输出b.js-2 0

// 手动对count进行赋值
mod.count = 4
console.log('b.js-3', mod.count)//输出 b.js-3 4

// 最后还会输出：a.js  1