Function.prototype.apply = function (context, arg) {
    context.fn = this
    let result
    if (arg === undefined || arg === null) {
        result = context.fn(arg)
    } else {
        result = context.fn(...arg)
    }
    delete context.fn
    return result
}