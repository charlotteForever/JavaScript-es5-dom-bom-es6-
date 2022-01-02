
function passthru(literals, ...substitutions) {
    // for of可以遍历值
    // 输出：
    // --
    // - items cost $-
    // - in total-
    for (k of literals) {
        console.log('-' + k + '-')
    }
    // 输出：
    // -10-
    // -15-
    for (k of substitutions) {
        console.log('-' + k + '-')
    }
    // let result = ''
    // for (let i = 0; i <)
}
count = 10
let price = 15
let str1 = passthru`${count} items cost $${price} in total`