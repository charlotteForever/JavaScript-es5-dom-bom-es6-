//箭头函数没有prototype属性，不能作为构造函数，通过new关键字创建对象
var Type = () => { };
var mytype = new Type();