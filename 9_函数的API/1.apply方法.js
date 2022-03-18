//
// 数组合并到其中一个数组 （使用concat是返回新数组）
var array = ['a', 'b', 1];
var elements = [0, 1, 2];
// 把array的this指向array,并把elements作为参数传入
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]
