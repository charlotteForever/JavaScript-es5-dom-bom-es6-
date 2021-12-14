//常见形式1
var func1 = value => value;//传入参数为value，返回值也为value
// console.log(value);
console.log(func1(2));// 2

//常见形式2
var func2 = (a, b) => {
    return a + b;
};
console.log(func2(1, 2));//输出3

//返回一个对象
var func3 = () => {
    return {
        a: 2,
        func4: function () {
            console.log("这是func4的输出");
        }
    };
};
var obj = func3();//接受返回的对象
console.log(obj.a);//输出2
obj.func4();//输出：这是func4的输出
