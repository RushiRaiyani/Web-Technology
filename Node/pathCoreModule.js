// Demonstrate “path” core module in NodeJS. 
let path = require('path');
let a=path.normalize('D:\\Rushi\\College\\sem-3\\OAT\\..\\OAT\\..');
console.log(a);
let b=path.join('/foo','bar','abc');
console.log(b);
let c=path.resolve('abc','xyz');
console.log(c);
let d=path.relative('/foo/bar','/foo/abc');
console.log(d);
let e=path.dirname("D:\\Rushi\\College\\sem-3\\WT");
console.log(e);
let f=path.basename('/foo/xyz/abc.txt');
console.log(f);
let g=path.extname('/foo/abc.txt');
console.log(g);