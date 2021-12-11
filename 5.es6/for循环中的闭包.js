// for (var i = 0; i < 5; i++) {
//     setTimeout(function func() {
//         console.log(i);
//     }
//         , 1000)
//         //如果就写1000，那么隔一秒，一次性输出五个,i循环完了才会执行计时器
// }


// for (var i = 0; i < 5; i++) {
//     setTimeout(function func() {
//         console.log(i);
//     }
//         , i * 1000)
//     //如果就写1000，那么隔一秒，一次性输出五个
// }

//立即执行函数
for (var i = 0; i < 5; i++) {
    (function name() {
        setTimeout(function func() {
            console.log(i);
        }
            , i * 1000)
    })();

    //如果就写1000，那么隔一秒，一次性输出五个
}