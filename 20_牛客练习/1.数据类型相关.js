// console.log(null === undefined)//false
// console.log(!![])//true
// console.log(!!'')//false

// console.log(+new Array(017))//NaN，+是一元运算符，没有运算效果，但是这里表示转化为number

// function fn() { var a = b = 1; }
// fn();
// console.log(b);//正常输出1
// console.log(a);//抛出异常

// console.log(a);
// var a = "a";
// var foo = () => {
//     console.log(a);
//     var a = "a1";
// }
// foo();
// //打印结果：
// //undefined
// //undefined

// var foo = "10" + 3 - "1";// 输出102
// console.log(foo);

// console.log(0xff ^ 33)//异或操作 输出222

// var arr = [];
// arr[0] = 0;
// arr[1] = 1;
// arr.foo = 'c';
// console.log(arr.length);//2

console.log(3 == true)//false
console.log(true == 3)//false


console.log(null == undefined)//true

console.log(isNaN("true"))//true,判断是不是非数字

var num = prompt('请输入分母:')
try {
    console.log('a');
    value = 0 / num;
    console.log('b');
}
catch (e) {
    console.log('c');
}
finally {
    console.log('d');
}
// 输出a,b,d js不会因为除以0而终止，只是返回NaN
