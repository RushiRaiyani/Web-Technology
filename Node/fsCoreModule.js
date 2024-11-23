// Demonstrate “fs” core module in NodeJS.
const fs = require('fs');
fs.exists('./a.txt', (exist) => {
    console.log(exist ? 'found' : 'not found!');
});
fs.stat('./a.txt', (err, data) => {
    console.log(data);
    console.log(err); 
});
//Synchronous 
const data=fs.readFileSync('./a.txt');
console.log(data.toString());
//Asynchronous
fs.readFile('./a.txt', (err, data) => {
    console.log(data.toString());
});
fs.rename('./b.txt', 'a.txt', (err) => {
    if (err) {
        throw err;
    }
    console.log('File renamed!');
});
fs.unlink('./a.txt', (err) => {
    if (err) {
        throw err;
    }
    console.log('File deleted!');
});