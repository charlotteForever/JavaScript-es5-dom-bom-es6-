// 第一个参数是
// @ts-ignore
Function.prototype.myCall = function (context) {
    if (typeof this !== 'function') {
        throw new Error('Error')
    }
    // 不传参默认为window
    context = context || window
    context.fn = this
    let arg = Array.from(arguments).slice(1)
    // 传递参数
    const result = context.fn(...arg)
    delete context.fn
    return result
}