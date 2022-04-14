// "ues strict";
// function foo(n) {
//     if (n === 0) return 100
//     else {
//         return foo(n - 2)
//     }
// }
// foo(5000)
function f1(n) {
    return n * 2
}
function f2(n) {
    return f1(n + 1)
}
console.log(f2(2))//6