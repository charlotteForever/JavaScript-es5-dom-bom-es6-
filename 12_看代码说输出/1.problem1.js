var a = 1
var oA = () => {
    console.log(this.a)
}
// @ts-ignore
obj = {
    a: 10,
    b: function () {
        console.log(this.a);
    }
}
// @ts-ignore
var c = obj.b
oA()  //undefined
// @ts-ignore
obj.b() //10
c()  //undefined