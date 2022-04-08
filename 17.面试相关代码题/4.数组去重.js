// set和解构赋值去重
let arr = [1, 1, 2, 2, 4, 6, 6]
let arr1 = [...new Set(arr)]
console.log(arr1)

// set和Array.from去重
let arr2 = Array.from(new Set(arr))
console.log(arr2)

// indexOf和filter去重
let arr3 = arr.filter((el, index, arr) => { return arr.indexOf(el) === index })
console.log(arr3)