async function async1() {
    console.log('async1 start');
    await async2()
    // await后面的函数会先执行一遍(比如await Fn()的Fn )，
    // 然后就会跳出整个async函数来执行后面js栈的代码。
    // 等本轮事件循环执行完了之后又会跳回到async函数中等待await****后面表达式的返回值
    console.log('async end');
}
async function async2() {
    return new Promise((resolve, reject) => {
        console.log('async2 start');
        resolve()
    }).then(res => {
        console.log('async2 end');
    })
}

async1()

new Promise(resolve => {
    console.log('Promise');
    resolve()
}).then(res => {
    console.log('Promise end');
})

console.log('script end');
