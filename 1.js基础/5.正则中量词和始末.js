//{}包围量词
//a{4}  意思是a连着出现4次
//(ab){1,3}  意思是ab连在一起出现1~3次都可以

let str1 = 'asdsaaaav';
let reg1 = /a{3}/;//结果为true
console.log(reg1.test(str1));

let str2 = 'sdbv';
let reg2 = /(bv){1,3}/;
console.log(reg2.test(str2));//结果为true


//^a表示以a开头，如想以ab开头则要^(ab)
//b$表示以b结尾
let str3 = 'absvsvb';
let reg3 = /^(ab)svb$/;
console.log(reg3.test(str3));//结果为false


//.表示任意字符，要检查字符串里是否有.，就要用转义符\.
//同理：\