//没有箭头函数，数组的sort函数
let arr = [1, 5, 3, 6, 7];
let sort1 = arr.sort(function (a, b) {
    return a - b;
});

arr = [1, 5, 3, 6];
//有了箭头函数，简化比较器
let sort2 = arr.sort((a, b) => (a - b));
console.log(sort2);//输出1 3 5 6