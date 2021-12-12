function foo() {
    let a = 2;
    function bar() {
        console.log(a);
    }
    return bar;
}
let baz = foo();
baz();//闭包的效果，bar在定义时的词法作用域之外的地方执行，闭包使得bar仍然可以访问原作用域
//bar仍然持有对原作用域的引用，这个引用就叫做闭包