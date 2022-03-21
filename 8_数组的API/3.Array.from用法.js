// 第一个参数是arrayLike即想要转化为数组的类数组or可迭代对象
console.log(Array.from('12313'))
//[ '1', '2', '3', '1', '3' ]

console.log(Array.from(new Set(['foo', 'bar', 'baz', 'foo'])))
// [ 'foo', 'bar', 'baz' ]

console.log(Array.from(new Map([['a', 1], ['b', 2]]).values()))
// [ 1, 2 ]

// 对长度为3的数组的每一元素，把其变为一个长度为5的数组，并且赋值为0
console.log(Array.from(new Array(3), () => new Array(5).fill(0)))
// [ [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ] ]
// console.log(Array.from(new Array(3), () => new Array(5).fill(0)))

// 配合箭头函数
console.log(Array.from([1, 2, 3, 4], (i) => i * 2))

// 数组去重合并
function combine() {
    // 先把两个数组拼接在一起（两种办法都可以
    let arr = arguments[0].concat(arguments[1])
    // let arr = [].concat.apply([], arguments)
    console.log(arr)
    return Array.from(new Set(arr))
}
console.log(combine([1, 2, 4, 5], [4, 2, 1, 5]))