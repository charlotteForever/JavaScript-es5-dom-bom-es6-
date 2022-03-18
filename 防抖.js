function debounce(func, delay) {
    let timer;
    return function () {
        let context = this
        let arg = arguments
        clearTimeout(timer)
        setTimeout(() => {
            func.apply(context, arg)
        }, delay)
    }
}
