function Person(name) {
    this.name = name;
}
Person.prototype.print = function () {
    return this.name;
};
Person('abc');
const a = new Person('abc').print.call({});
// {}身上没有name属性，为undefined
console.log(a);
const fn = () => { this.x = 'z'; };
const b = { x: 'y' };
fn.call(b);
// 直接输出
console.log(b);
