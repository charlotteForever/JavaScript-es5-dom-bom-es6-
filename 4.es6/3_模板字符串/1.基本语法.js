// 之前实现字符串换行的方法
// 1.使用js的bug
let str1 = 'hello \n\
caicai'  //\n表示换行，\表示行的延续
console.log(str1);
//2.使用拼接字符串
let str2 = ['hello', 'caicai'].join('\n')
console.log(str2)

// 引入模板字符串
let str3 = `hello
caicai`
console.log(str3)
console.log(str3.length)
console.log('@' + str3[5] + '@')
// 模板字符串中所有空白符都属于字符串的一部分
let str4 = `hello      
          caicai`
console.log(str4.length)//输出28