const n = 2
let str1 = ''
let str2 = ''
for (let i = 0; i < n; i++) {
    str1 = str1 + '*'
    str2 = str2 + '.'
}
for (let i = 1; i <= 3 * n; i++) {
    console.log(str1 + str2 + str2 + str1)
}
let str = ''
for (let i = 1; i <= n; i++) {
    str = str2.substr(0, i) + str1 + str2.substr(0, n - i)
    str += str.split('').reverse().join('')
    console.log(str)
}
