// 一次性打印出五个5
// for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000 * i);
// }


// 1，2，3，4，5经过一秒之后全部打印出来
// for (let i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i + 1);
//     }, 1000);
// }

// 1，2，3，4，5隔一秒打印一个
// for (let i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i + 1);
//     }, 1000 * i);
// }

// 1，2，3，4，5隔一秒打印一个 利用promise
function test2(i) {
    return new Promise((res) => {
        setTimeout(() => {
            res(i + 1)
        }, 1000)
    })
}

async function test() {
    for (let i = 0; i < 5; i++) {
        //await的值为右侧promise的result 
        console.log(await test2(i))
    }
}
test()