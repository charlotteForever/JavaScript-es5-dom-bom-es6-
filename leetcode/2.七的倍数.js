// let arr = [2, 4, 2, 5, 21, 8]
// let arr1 = arr.filter((el) => el === 4)
// console.log(arr)
// console.log(arr1)
// 遍历，arr[i],看有没有el+arr[i]%7=0,如果有，就sum+=el（数组里最大的）,并且把原数组的该数字和arr[i]置为0，如果没有，就i++
// @ts-ignore
let num = 4
// @ts-ignore
let arr = [1, 3, 6, 6]
let sum = 0
for (let i = 0; i < num; i++) {
    let canMatch = arr.filter((el) => (el + arr[i]) % 7 === 0)
    if (canMatch.length !== 0) {
        sum += arr[i]
        sum += Math.max(...canMatch)
        arr[i] = 0
        // @ts-ignore
        arr[arr.indexOf(Math.max(...canMatch))] = 0
    }
}
console.log(sum)