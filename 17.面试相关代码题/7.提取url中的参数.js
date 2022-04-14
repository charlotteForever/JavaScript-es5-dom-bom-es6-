var url = "http://www.baidu.com?username=limei&age=18&password=&school=xidian";
let res = url.substring(url.indexOf('?') + 1).split('&').reduce((pre, cur) => {
    let key = cur.split('=')[0]
    let val = cur.split('=')[1]
    pre[key] = val
    // 需要有return，作为下一次的值
    return pre
}, {})
console.log(res)

// var url = "http://www.baidu.com?username=limei&age=18";

// var obj = url.substr(url.indexOf("?") + 1).split("&").reduce((pre, cur) => {
//     var key = cur.split("=")[0];
//     var val = cur.split("=")[1];
//     pre[key] = val;
//     return pre;
// }, {})

// console.log(obj)  //{username: "limei", age: "18"}
