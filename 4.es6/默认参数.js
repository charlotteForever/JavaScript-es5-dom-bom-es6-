//es5非严格模式下,arguments参数值随传入的参数改变而改变
function func1(a, b) {
    console.log(arguments[0], arguments[1]);//输出1 2
    a = 3;
    b = 4;
    console.log(arguments[0], arguments[1])//输出3 4
}
func1(1, 2);

//es5严格模式下，arguments不随传入参数的改变而改变

function func2(a, b) {
    "use strict";
    console.log(arguments[0], arguments[1]);//输出1 2
    a = 3;
    b = 4;
    console.log(arguments[0], arguments[1])//输出1 2
}
func2(1, 2);

//es6使用默认参数

function func3(a, b = 100) {
    console.log(arguments[0], arguments[1]);//arguments[1]的值不存在 输出1 undefined
    a = 3;
    console.log(arguments[0]);//输出1，与es5严格模式保持一致
}
func3(1);
