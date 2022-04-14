console.log(1);
setTimeout(function () {
    console.log(2)
}, 0);
new Promise(function (resolve) {
    console.log(3)
    for (var i = 100; i > 0; i--) {
        i == 1 && resolve()
    }
    console.log(4)
}).then(function () {
    console.log(5)
}).then(function () {
    console.log(6)
});
console.log(7);
