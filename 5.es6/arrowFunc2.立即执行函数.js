//以箭头函数的形式创建立即执行函数  要把箭头函数包含在表达式里
var func5 = ((name) => {
    return {
        getName: function () {
            return name;
        }
    }
})("caicai");
console.log(func5.getName());//输出：caicai
