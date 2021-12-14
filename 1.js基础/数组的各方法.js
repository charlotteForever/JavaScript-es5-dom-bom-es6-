let arr = [1, 3, 8, '7', '11'];

//增
arr.push('last');//改变原数组
console.log(arr);

arr.unshift('first');//改变原数组
console.log(arr);

let new_arr1 = arr.slice(1, 3);//不改变原数组,从第1个元素开始，截取到滴3个字串
console.log(arr);
console.log(new_arr1);

arr.splice(2, 1);//改变原数组,从第二个元素开始，删除三个
console.log(arr);

let new_arr2 = arr.reverse();//不改变原数组，返回一个新数组
console.log(new_arr2);

arr.sort(function (a, b) {//改变原数组
    return a - b;
});
console.log(arr);


let str = arr.toString();//toString可以的！！！！
console.log(str);

let str2 = arr.join('@');
console.log(str2);