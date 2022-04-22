const reg = /^((http|https):\/\/)([a-zA-Z]+.){1,2}[A-Za-z]*/
let str = 'http://juejin.cn'
console.log(reg.test(str))
