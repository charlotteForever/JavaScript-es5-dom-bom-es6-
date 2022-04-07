let arr = ['1', '3', '10']
// console.log(arr.map(parseInt))
let new_arr
new_arr = arr.map((el, index) => {
    return parseInt(el, index)
})
console.log(new_arr)