// @ts-nocheck
let num = 2
let dots = [5, 7]
// @ts-ignore
let arr = new Array(num)
for (let i = 0; i < num; i++) {
    arr[i] = new Array(2).fill(0)
}
let distance = []
for (let i = 0; i < num; i++) {
    // arr[i][0]是i到0之间的距离，arr[i][1]是i到最后一个之间的距离
    arr[i][0] = dots[i] - dots[0]
    arr[i][1] = dots[num - 1] - dots[i]
    distance.push(Math.abs(arr[i][0] - arr[i][1]))
}
console.log(Math.min(...distance))
