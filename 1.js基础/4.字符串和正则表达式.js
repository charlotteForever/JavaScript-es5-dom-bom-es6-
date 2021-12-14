//search() 查找是否存在某字符
//传入一个字符或者正则表达式，返回第一个匹配的字符的起始索引
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