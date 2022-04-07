// 取得两个数组⾥相同的部分, 并去重
// 然后按照从⼩到⼤顺序排序, 最后结果返回 (注意, 是返回结果, 不是把结果打印出来)
const arrayA = [4, 2, 1, 2, 5];
const arrayB = [2, 3, 1, 6];
// 第一个filter提取相同部分
// 第二个filter去重
// sort进行排序
function process(arrayA, arrayB) {
    return arrayA.filter((v) => arrayB.includes(v))
        .filter((el, index, arr) => arr.indexOf(el) === index)
        .sort((a, b) => a - b)
}
/*
应该返回 [1, 2]
*/
console.log(process(arrayA, arrayB));