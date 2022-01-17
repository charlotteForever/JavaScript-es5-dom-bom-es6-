[TOC]

## 浏览器页面渲染

> 页面渲染的过程

<img src="C:\Users\10153\AppData\Roaming\Typora\typora-user-images\image-20220116142423595.png" alt="image-20220116142423595" style="zoom: 33%;" align='left' />

1. 浏览器根据DNS域名解析得到IP地址
2. 浏览器与服务器建立一个TCP连接
3. 浏览器根据IP地址向服务器发起HTTP请求
4. 服务器根响应HTTP请求
5. 浏览器得到返回的内容
6. 解析HTML，生成DOM树
7. 解析CSS，生成CSS Rule Tree
8. 构建：合并DOM和CSS树，将其合并为rendering Tree(渲染树)
9. 布局：根据渲染树，计算出每个元素在页面中的位置
10. 绘制：把渲染树上的元素展示到浏览器上

> 浏览器渲染进程

分为两个线程：GUI线程、JS引擎线程。

GUI线程主要负责：渲染浏览器页面，解析HTML、CSS并构建DOM树和							      渲染树；进行页面的绘制和布局。

JS引擎线程主要负责：解析Java Script脚本；按照代码顺序一次把代码添									  加到执行队列中（除了计时器），一个浏览器渲染									  进程里同时只能有一个JS引擎在运作（JS是单线程									  的）。

两个线程是互斥的，当JS引擎线程执行时，GUI线程会被挂起，直到JS引擎线程执行完毕。

另外，CSS文件的下载解析也会阻碍HTML的下载解析

> 渲染阻塞

CSS和JS代码的加载解析阻塞DOM树的构建。

~~JS引擎进程长时间运行，GUI线程长时间挂起，导致页面渲染不连贯。~~

解决：确保在脚本执行前页面已经完成了DOM树渲染。

​	方案1：把CSS放在head标签里，js代码放在文档的末尾

> 重排

元素位置、文本内容结构发生改变时，会发生重排。（重排一定会导致重绘）。如：DOM对元素进行增删或者位置排列，元素大小改变、CSS改变属性样式

> 重绘

不改变元素在浏览器中的排列位置，而只是对背景色、边框色、元素的显隐进行操作时，会发生页面的一部分重绘。

> 获取元素渲染时长



## js数据类型

原始数据类型：number、string、Boolean、undefined

​	存放在栈中；大小比较固定，占用内存较小；由编译器管理

引用数据类型：object、array、function、null

​	存放在堆中，大小不固定，占用内存较大；由开发者管理

es6新增：bigint、symbol

## 伪数组 伪数组转化为数组

有length和索引，但是没有数组的方法

转化为数组：

1. Array.from（***）
2. 通过 call 调用数组的 slice 方法来实现转换
3. ...扩展运算符

## 检测数据类型

typeof：其中数组、对象、null都会被判断为object，函数是function

```javascript
console.log(typeof 2);               // number
console.log(typeof true);            // boolean
console.log(typeof 'str');           // string    
console.log(typeof function(){});    // function
console.log(typeof undefined);       // undefined
console.log(typeof []);              // object
console.log(typeof {});              // object
console.log(typeof null);            // object
```

instanceof：只能准确判断引用数据类型

```javascript
console.log(2 instanceof Number);   // false
console.log(true instanceof Boolean); // false 
console.log('str' instanceof String);  // false  

console.log([] instanceof Array);  // true
console.log(function(){} instanceof Function);// true
console.log({} instanceof Object);  // true
```

`instanceof` 运算符可以用来测试一个对象在其原型链中是否存在一个构造函数的 `prototype` 属性。

## typeof NaN的结果

NaN 指“不是一个数字”（not a number），结果是number，是唯一一个===不成立的值，是自反值

## 什么是闭包

变量或函数，在定义其的作用于之外，仍然可以访问到原作用域（原作用域仍因为他的存在而保留）

例子：

```javascript
```





## 临时死区

js引擎扫描发现变量声明，要么提升至作用域最前面，要么放到临时死区里(let和const的声明)，直到遇到声明语句，才把变量从临时死区里拿出来

## 为什么要变量提升

> 变量提升：由于第一代JS虚拟机中的抽象纰漏导致的，编译器将变量放到了栈槽内并编入索引，然后在（当前作用域的）入口处将**变量名**绑定到了**栈槽内**的变量。（注：这里提到的抽象是计算机术语，是对内部发生的更加复杂的事情的一种简化。）

变量提升是人为实现的纰漏，而函数提升在当初设计时是有目的的。

函数提升就是为了解决相互递归的问题

## 尾调优化

es6引擎的优化机制（在递归函数处体现最显著）。尾调用：在一个函数体的末尾，调用另外一个函数。

es5里的尾调用：在尾部创建栈帧，把函数推入新栈帧来表示调用，在循环调用里，每一个没用完的栈帧都保存在内存里

es6里的尾调用：缩减严格模式里尾调用栈帧的大小，如果满足以下条件，不再创建新栈帧，而是清空并重用当前函数的栈帧：

> 1. 尾调用不访问当前栈帧的变量(函数不是一闭包)
> 2. 尾调用的语句在函数的最后一行
> 3. 尾调用的结果==直接==作为函数的==返回值==（一定要有返回值）

## 正则表达式

##### 正则表达式

检查字符串是否符合规则/提取出符合规则的正则表达式

第一个参数：正则表达式	第二个参数：匹配模式

i：忽略大小写		g全局匹配

1. 构造函数创建正则表达式对象：

   ```javascript
     //，检查字符串是否有大小写a
     let reg = new RegExp('a', 'i');
     let str = 'sdAdsd';
     //用test检查字符串str是否满足正则表达式的要求
     console.log(reg.test(str));
   ```

2. 字面量创建正则表达式

   ```javascript
    let reg = /ab/;
    console.log(reg.test('bac'));
   ```

3. 字符串支持正则表达式的方法：(不会改变原字符串)

   ```javascript
   //search() 查找是否存在某字符
   //传入一个字符或者正则表达式，查找有没有对应的，如果有就返回第一次出现的索引
   let str1 = 'a1c aec afc';
   let res1 = str1.search(/a[a-z]c/);
   console.log(res1);//4
   
   //match() 返回符合条件的字符
   //传入一个字符或者正则表达式,返回第一个匹配的字符；如模式为全局匹配，会返回所有结果组成的数组
   let str2 = 'abc hello aEc';
   let res2 = str2.match(/a[a-z]c/ig);
   console.log(res2 instanceof Array);//true
   console.log(res2);//[ 'abc', 'aEc' ]
   
   //replace() 替换
   //传入两个字符，其中第一个可以是正则表达式,返回替换后的字符串；如模式为全局匹配，替换all满足条件的
   let str3 = '1a2b3c4d5E6';
   //如第二个参数为空串，则被替换后的新字符串为空串
   let res3 = str3.replace(/[a-z]/ig, '');
   console.log(res3);//123456
   
   //split(),拆分字符串，返回一个数组
   let str4 = '1a2b3c4e5F6';
   let res4 = str4.split(/[a-z]/i);
   console.log(res4);//[ '1', '2', '3', '4', '5', '6' ]
   
   ```

## for in和for of

**for in**(遍历对象)

遍历得到数组的下标/对象的key

问题：会遍历数组所有的可枚举属性，包括原型，如下，会输出name和test

```javascript
let arr = ['lihua', 'xiaohong', 'xiaoming']
arr.name = '数组'
Array.prototype.test = function () {
}
for (index in arr) {
    console.log(index)
}
//过滤掉原型对象上的函数和属性
for (index in arr) {
    if (arr.hasOwnProperty(index)) {
        console.log(index + '@')
    }
}
```

**for of**(遍历数组)

遍历得到数组的值，不可以遍历对象

一个数据结构只要部署了`Symbol.iterator` 属性, 就具有 iterator接口, 可以使用 for of循环。

数组 Array Map Set String arguments对象，同样也可以解构赋值，剩余参数



## this的指向问题

this指向最后真正调用它的对象。

1、如果一个函数中有this，但是它没有被上一级的对象所调用，那么this指向的就是window（但在js的严格版中this指向的不是window）

2、如果一个函数中有this，这个函数有被上一级的对象所调用，那么this指向的就是上一级的对象。

3、如果一个函数中有this，**这个函数中包含多个对象，尽管这个函数是被最外层的对象所调用，this指向的也只是它上一级的对象(无论上一级对象里有没有他想要的东西）**

构造函数版this：

```javascript
//new关键字将Fn中的this绑定到a对象上
function Fn(){
    this.user = "追梦子";
}
var a = new Fn();
console.log(a.user); //追梦子
```

this与return

```javascript
//如果返回值是一个对象(函数也是object），那么this指向的就是该对象
//如果返回值不是一个对象或者返回null,那么this还是指向函数的实例。
```

## 原型和原型链

通过一个构造函数(Famale)创建一个对象(caicai)。

该构造函数有一个prototype属性，指向它的原型对象，并从其原型对象里继承属性

```javascript
let Famale = function () {

}
Famale.prototype.sex = 'girl';//在原型对象里添加一个属性
let caicai = new Famale();
console.log(caicai.sex);//输出girl
```

用该构造函数创建的对象（每一个对象都）有一个属性\_proto\_指向其构造函数的原型

```javascript
let Famale = function () {

}
let caicai = new Famale();
console.log(caicai.__proto__ === Famale.prototype);//true
```

每一个原型对象都有一个constructot属性指向与其关联的构造函数

```javascript
let Famale = function () {

}

let caicai = new Famale();

console.log(Famale.prototype.constructor === Famale);
```

图：

`Person.prototype`叫做显式原型属性 `person.__proto__`叫做隐式原型属性

上面的两个属性都指向同一个原型对象

<img src="https://upload-images.jianshu.io/upload_images/1490251-0cac772635e8a128.png" alt="https://upload-images.jianshu.io/upload_images/1490251-0cac772635e8a128.png" style="zoom:560%;" />

### 写一个原型链继承

```javascript
let Animal = function () {
    this.eat = function () {
        console.log('animal eat');
    }
}

let Dog = function () {
    this.bark = function () {
        console.log('dog bark');
    }
}

Dog.prototype = new Animal();
let hashiqi = new Dog();
hashiqi.eat();
hashiqi.bark();
```

### 创建一个对象的过程

<img src="C:\Users\10153\AppData\Roaming\Typora\typora-user-images\image-20211201221232166.png" alt="image-20211201221232166" style="zoom:20%;" />

## 模板字符串

**基本语法**

模板字符串中所有空白符都属于字符串的一部分

```javascript
let str3 = `hello
caicai`
console.log(str3)
console.log(str3.length)
console.log('@' + str3[5] + '@')//输出一个换行
```

**字符串占位符**

```javascript
let nam = 'caicai'
let hello = `hello ${nam}`
console.log(hello)//hello caicai

nam = 'fanfan'
console.log(hello)//hello caicai
hello = `hello ${nam}`
console.log(hello)//hello fanfan
```

**标签模板**

可以是一个函数，调用时传入加工后的模板字符串的各部分数据(按照任意自己想要的方式进行加工)，把加工后的值作为返回值返回

```javascript
//接受的参数如下
function passthru(literals, ...substitutions) {
    // for of可以遍历值
    // 输出：
    // --
    // - items cost $-
    // - in total-
    for (k of literals) {
        console.log('-' + k + '-')
    }
    // 输出：
    // -10-
    // -15-
    for (k of substitutions) {
        console.log('-' + k + '-')
    }
    // let result = ''
    // for (let i = 0; i <)
}
count = 10
let price = 15
let str1 = passthru`${count} items cost $${price} in total`
```

主要是code，敲完一章之后，在md上总结，复习时上传csdn

## name和value保留字

命名时尽量不要使用name和value给变量命名

## ES6模块化

==分别暴露==

```javascript
export func1(){
	console.log('haha')
}
export func2(){
	console.log('xixi')
}
//导入时
import {func1,func2} from '文件所在路径'
```

==统一暴露==

```javascript
function func1(){
    console.log('haha')
}
function func2(){
	console.log('xixi')
}
export {func1,func2}

//导入时
import {func1,func2} from '文件所在路径'
```

==默认暴露==

一个文件里只能有一个默认暴露

```javascript
export default{ 
func2(){
	console.log('xixi')
}
}

import myFuncs from '文件所在路径'
```

### CommonJS模块化

```javascript
//a.js
function func1(){
    console.log('haha')
}
function func2(){
    console.log('xixi')
}
module.exports={
    func1,func2
}

//b.js引入模块
let {func1,func2}=require('./a.js')
```

### ES6模块和CommonJS模块的异同

==CommonJS==

1. 一个文件就是一个模块，

2. 如果导出基本数据类型，属于复制，对另一个模块值的修改不会影响原模块，原模块的修改也不会影响引用模块

   如果导出复杂数据类型，属于浅拷贝，对另一个模块的修改会影响原模块

3. CommonJS是加载时执行：遇到`require`的时候，就会全部执行，生成一个对象存在内存里，然后从这个对象的属性上取需要的值

==ES6==

1. 导入的值只是原模块的`动态只读引用`
2. 对于只读：不允许修改引入的模块的值

3. 对于动态：原始模块发生变化，import加载的值也会变化
4. ES6模块是编译时输出接口：遇到`import`时，输出一个动态只读引用，等到真的要用这个值的时候（运行时），再通过这个引用到模块中取值。



共同点：

1. CommonJS和ES6 Module都可以对引⼊的对象进⾏赋值，即对对象内部属性的值进行改变。
2. 遇到多次导入，只执行一次

### 循环加载

两者循环加载的处理机制一样：遇到循环加载时，输出已经执行的部分，没有执行的部分不予输出

但是因为前者是运行时加载，后者是编译时加载，所以也有一些不同

==CommonJS循环加载==

```javascript
//a.js
console.log('a starting');
exports.done = false;
const b = require('./b.js');
console.log('in a, b.done = %j', b.done);
exports.done = true;
console.log('a done');

// b.js
console.log('b starting');
exports.done = false;
const a = require('./a.js');
console.log('in b, a.done = %j', a.done);
exports.done = true;
console.log('b done');

//// main.js
console.log('main starting');
const a = require('./a.js');
const b = require('./b.js');
console.log('in main, a.done = %j, b.done = %j', a.done, b.done);
```

输出为：

> 次数采用注释的方式说明了执行顺序，需要耐心一点看

```bash
main starting #加载main.js
a.starting #在main.js中开始加载a模块
b.starting #在a.js中开始加载b模块
# 加载b时遇到再次对a的加载，发现循环加载 输出已经执行的部分
#此时还处在b模块中
in b,a.done=false #这是因为上一个代码块的第二行
b done
#返回到a模块接着第四行执行
in a,b.done=true #这是因为上一个代码块的第14行
a done
#返回到main
#遇到对b模块的加载，不再执行(CommonJS机制)
in main,a.done=true,b.done=true#这是因为6和14行
```

==ES6循环加载==

## es6新特性

## let和const

和var的区别

<img src="C:\Users\10153\AppData\Roaming\Typora\typora-user-images\image-20211201210935507.png" alt="image-20211201210935507" style="zoom:50%;" />

## 默认参数

> es5的时候：

非严格模式：arguments随传入参数的改变而改变

严格模式：参数改变不影响arguments的值

> es6

使用默认参数，不管是严格模式还是非严格模式，参数改变都不……

并且如果有两个参数，一个参数有默认参数，则arguments[1]的值是undefined

## 解构赋值

## 剩余参数

在函数声明的形参位置

res参数获取到的是数组，可以使用数组的api

<img src="C:\Users\10153\AppData\Roaming\Typora\typora-user-images\image-20220116203133539.png" alt="image-20220116203133539" style="zoom:50%;" />

## 扩展运算符

放在函数调用的实参处

能把数组变为逗号分隔的参数序列

<img src="C:\Users\10153\AppData\Roaming\Typora\typora-user-images\image-20220116203406892.png" alt="image-20220116203406892" style="zoom:50%;" />

==应用==

<img src="C:\Users\10153\AppData\Roaming\Typora\typora-user-images\image-20220116203838850.png" alt="image-20220116203838850" style="zoom:50%;" />

## 箭头函数

1. 没有arguments
2. 没有this绑定
3. prototype属性，不可以作为构造函数创建对象

## promise异步编程

#### 生命周期

<img src="C:\Users\10153\AppData\Roaming\Typora\typora-user-images\image-20211212184229999.png" alt="image-20211212184229999" style="zoom:33%;" />

不能通过变成手段检测promise生命状态，只有当其状态改变时，通过then确定下一步做什么。

promise支持链式回调，可以解决回调地狱（不便于阅读和错误处理）的问题





## 月影JS

### 各司其职

### 组件封装

在组件中，将插件独立出来

耦合和解耦

### 节流和防抖函数

节流（Throttle）：用户随便动鼠标，如果动一下就记录，会给后台传送很多数据；如果没每100ms记录一次

```javascript
function throttle(fn, time = 500){
  let timer;
  return function(...args){
    if(timer == null){
      fn.apply(this,  args);
      timer = setTimeout(() => {
        timer = null;
      }, time)
    }
  }
}

btn.onclick = throttle(function(e){
  circle.innerHTML = parseInt(circle.innerHTML) + 1;
  circle.className = 'fade';
  setTimeout(() => circle.className = '', 250);
});
```



防抖（Debour：

```javascript
var i = 0;
setInterval(function(){
  bird.className = "sprite " + 'bird' + ((i++) % 3);
}, 1000/10);

function debounce(fn, dur){
  dur = dur || 100;
  var timer;
  return function(){
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, dur);
  }
}

document.addEventListener('mousemove', debounce(function(evt){
  var x = evt.clientX,
      y = evt.clientY,
      x0 = bird.offsetLeft,
      y0 = bird.offsetTop;
  
  console.log(x, y);
  
  var a1 = new Animator(1000, function(ep){
    bird.style.top = y0 + ep * (y - y0) + 'px';
    bird.style.left = x0 + ep * (x - x0) + 'px';
  }, p => p * p);
  
  a1.animate();
}, 100));
```

多次调用函数，顺序不同最终的结果不同，就是非纯函数

操作dom的是非纯函数

iterative是纯函数
