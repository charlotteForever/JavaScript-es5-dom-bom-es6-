const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }]
arr.reduce((pre, cur) => {
    return pre.concat(cur), []
})
console.log(arr)