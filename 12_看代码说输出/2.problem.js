// @ts-ignore
obj = {
    func() {
        const arrowFunc = () => {
            console.log(this._name)
        }

        return arrowFunc
    },

    _name: "obj",
}
// @ts-ignore
console.log(obj)

//   作者：MoonBall
//   链接：https://juejin.cn/post/6946021671656488991
//   来源：稀土掘金
//   著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
