function Promise(excutor) {
    this.promiseState = 'pending'
    this.promiseResult = null
    const self = this

    function resolve(data) {
        // promise对象的状态只能修改一次
        if (self.promiseState !== 'pending') {
            // 修改状态为fulfilled
            self.promiseState = 'fulfilled'
            // 修改result为data
            self.promiseResult = data
        }

    }
    function reject(data) {
        if (self.promiseState !== 'pending') {
            // 修改状态为rejected
            self.promiseState = 'rejected'
            // 修改result为data
            self.promiseResult = data
        }
    }
    try {
        // 同步调用执行器函数
        excutor(resolve, reject)
    } catch (e) {
        // 抛出异常时，修改状态为rejected
        // self.promiseState = 'rejected'
        // self.promiseResult=
        reject(e)
    }

}
Promise.prototype.then = function (onResolve, onReject) {
    // 接收一个onResolve和onReject的函数体，判断之后把参数值传入就OK
    if (this.promiseState === 'fulfilled') {
        onResolve(this.promiseResult)
    } else {
        onReject(this.promiseResult)
    }
}