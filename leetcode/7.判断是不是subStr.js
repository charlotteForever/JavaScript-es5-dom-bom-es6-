function isSubStr(target, str) {
    let pre = 0
    for (let i = 0; i < target.length; i++) {
        console.log(str.indexOf(target[i], pre))
        if (str.indexOf(target[i], pre) === -1) {
            return false
        } else {
            pre = str.indexOf(target[i], pre)
        }
    }
    return true
}
let target = 'abc'
let str = 'ahbgdc'
console.log(isSubStr(target, str))