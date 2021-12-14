//表示'.'需要'\.'
//表示'\'需要'\\'
let str1 = 'aas\.dasd';
let reg1 = /\./;
console.log(str1);//结果为aas.dasd
console.log(reg1.test(str1));//结果为true

let str2 = 'ghkibhg\g';
let reg2 = /\\/;
console.log(reg2.test(str2));//结果是false，原因是str2中要表示\也需要转义
console.log(str2);//结果是ghkibhgg

str2 = 'ghkibhg\\g';
console.log(str2);//结果是ghkibhg\g
console.log(reg2.test(str2));//结果是true

//如果用构造函数创建正则表达式，也需要注意这一点
let reg3 = new RegExp('a\\a');
console.log(reg3);//结果为/a\a/


//其他转义字符
//'\w'：大小写字母、数字、下划线   (可用word记忆)
//'\W': 除了[A-Za-z0-9_]以外的东西
let reg4 = /\w/;
let str4 = '#$%^';
console.log(reg4.test(str4));//结果为false
reg4 = /\W/;
console.log(reg4.test(str4));//结果为true

//'\d'：数字     (可用digit记忆)
//'\D':除了数字之外

//'\s':空格     (可用space记忆)
//'\D':除了空格之外

//'\b':单词边界     (可用border记忆)
//'\B':除了单词边界
let str5 = 'hello children';
let reg5 = /\bchild\b/;
console.log(reg5.test(str5));//false

let str6 = '     he llo    ';//想去掉左右多余的空格但是不去掉中间的空格
console.log(str6.replace(/\s*/g, ''));//所有的空格都去掉了（不加g去掉开头的就停了）
console.log(str6.replace(/^\s*|\s*$/g, ''));

//任意字母数字+@+
