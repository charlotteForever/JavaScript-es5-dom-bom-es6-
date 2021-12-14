//用来代替arguments接受实参，此时叫做剩余参数
//与arguments不同的是，剩余参数有Array的各方法
function func(a, b, ...m) {
    console.log(a);
    console.log(b);
    console.log('m: ' + m);
    m.push(a);
    console.log('m: ' + m);
}
func(1, 2, 4, 3, 2, 6);

