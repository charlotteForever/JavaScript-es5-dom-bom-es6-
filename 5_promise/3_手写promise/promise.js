function Promise(excutor) {
    this.promiseState = 'pending'
    this.promiseResult = null
    const self = this

    function resolve(data) {
        // 修改状态为fulfilled
        self.promiseState = 'fulfilled'
        // 修改result为data
        self.promiseResult = data
    }
    function reject(data) {
        // 修改状态为fulfilled
        self.promiseState = 'rejected'
        // 修改result为data
        self.promiseResult = data
    }
    // 同步调用执行器函数
    excutor(resolve, reject)
}
Promise.prototype.then = function (onResolve, onReject) {

}