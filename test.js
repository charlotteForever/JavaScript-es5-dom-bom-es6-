var addStrings = function (num1, num2) {
    // 维护i和j指向两个数组的最后一位
    // 维护add判断是否要进位
    let i = num1.length - 1
    let j = num2.length - 1
    let add = 0
    // 存放结果
    let res = []
    // 如果最后一位有进位呢？所以要加上判断条件add！=0
    while (i >= 0 || j >= 0 || add !== 0) {
        // @ts-ignore
        let x = i >= 0 ? num1.charAt(i) - '0' : 0
        // @ts-ignore
        let y = j >= 0 ? num2.charAt(j) - '0' : 0
        res.unshift((x + y + add) % 10)
        add = Math.floor((x + y + add) / 10)
        i--
        j--
    }

    // console.log(res.join(''))
};
addStrings('123', '12')