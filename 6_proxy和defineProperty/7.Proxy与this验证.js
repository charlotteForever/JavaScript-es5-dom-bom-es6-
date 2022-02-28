let target = {
    m() {
        // 检查this的指向是不是proxyObkj
        console.log(this === proxyObj)
    }
}
let handler = {}
let proxyObj = new Proxy(target, handler)

proxyObj.m()//输出:true
target.m()//输出:false