var MyQueue = function () {
    // 用来存放入队列的元素
    this.stack1 = []
    // 用来存放出队列的元素
    this.stack2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.stack1.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    // 如果stack2非空，则直接pop
    if (this.stack2.length !== 0) {
        return this.stack2.pop()
    }
    // 如果stack2为空
    else {
        while (this.stack1.length !== 0) {
            this.stack2.push(this.stack1.pop())
        }
        return this.stack2.pop()
    }

};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    // 如果stack2不为空
    if (this.stack2.length !== 0) {
        return this.stack2[this.stack2.length - 1]
    }
    // 如果stack2为空
    else {
        return this.stack1[0]
    }
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.stack1.length === 0 && this.stack2.length === 0
};