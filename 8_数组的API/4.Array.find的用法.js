let arr = [1, 4, 6, 3, 2]
console.log(arr.find((el, index) =>
    el > 2 && index > 1
))
// 输出6