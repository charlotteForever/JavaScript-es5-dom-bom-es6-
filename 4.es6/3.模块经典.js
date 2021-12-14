function CoolModule(params) {
    var something = 'cool';
    var arr = [1, 2, 3];
    function doSomething() {
        console.log(something);
    }
    function doAnother() {
        console.log(arr.join('!'));
    }
    //返回一个模块的公共api
    return {
        doSomething: doSomething,
        doAnother: doAnother
    };
}

//创建一个模块实例，可以创建多个，当只需要创建一个时(改为立即函数），就是单例模式（
var mycool = CoolModule();
mycool.doAnother();
mycool.doSomething();