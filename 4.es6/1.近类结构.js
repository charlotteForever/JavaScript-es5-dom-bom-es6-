function Person(name) {
    this.name = name;//添加一个属性
}

//给原型添加一个方法，这样所有实例化对象都可以有这个方法
Person.prototype.getName = function () {
    console.log(this.name);
}

var lihua = new Person('lihua');
lihua.getName();