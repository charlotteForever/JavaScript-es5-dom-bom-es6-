let arr = [1, [2, [3, [4]], 5]]
const depth = 2
for (let i = 0; i < depth; i++) {
    if (arr.some((el) => Array.isArray(el))) {
        arr = [].concat(...arr)
    }
}
console.log(arr)