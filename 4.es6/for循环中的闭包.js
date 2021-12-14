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
for (var i = 0; i < 5; i++) {//i在共享的全局作用域里
    (function name() {//延迟函数的回调在循环结束时才会执行
        setTimeout(function func() {
            console.log(i);
        }
            , i * 1000)//每隔一秒输出一个5
    })();

    //如果就写1000，那么隔一秒，一次性输出五个
}


//正确的两种写法
for (var i = 0; i < 5; i++) {
    let j = i;//要用let
    setTimeout(() => {
        console.log(j);
    }, j * 1000);//每隔一秒 从零开始输出0 1 2 3 4
}
//写法二
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 1000);
}