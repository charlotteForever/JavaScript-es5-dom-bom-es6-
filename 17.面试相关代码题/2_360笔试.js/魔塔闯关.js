// 如果arr[i][1]=0，直接加
// 然后filter(el[1]===1),然后排序,从大到小
const num = 5
const arr = Array.from(new Array(5), () => new Array(2).fill(0))
arr[0][0] = 1; arr[0][1] = 1
arr[1][0] = 3; arr[1][1] = 1
arr[2][0] = 5; arr[2][1] = 1
arr[3][0] = 2; arr[3][1] = 0
arr[4][0] = 2; arr[4][1] = 0
let res = 0
arr.forEach((el) => {
    if (el[1] === 0) {
        res += el[0]
    }
})
let temp = arr.filter((el) => el[1] === 1)
let hasTreasure = []
temp.forEach((el) => hasTreasure.push(el[0]))
hasTreasure.sort((a, b) => b - a)
hasTreasure.forEach((el) => {
    if (el >= res) {
        res += el
    } else {
        res = res * 2
    }
})
console.log(res)