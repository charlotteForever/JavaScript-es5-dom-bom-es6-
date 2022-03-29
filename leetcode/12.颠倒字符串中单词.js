let str = '  the sky is  blue '
// 过滤掉前后的空格（以多个空格开头或者以多个空格结尾的单词）
str = str.replace(/^\s*|\s*$/g, '')

// 1.进行二次替换，把多个空格改为一个空格
// str = str.replace(/\s+/g, ' ')
// 2.改变split的方式
let arr = str.split(/\s+/).reverse()

console.log(arr)