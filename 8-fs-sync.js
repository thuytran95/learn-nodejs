const {readFileSync, writeFileSync}=require('fs');
console.log('start')

//readFileSynce truyen vao 2 tham so : path cua file cu the, method decode file
// nếu truyền sai path, ỏ tên -> báo lỗi no such file or directory 
const first=readFileSync('./content/first.txt', 'utf-8')
const second=readFileSync('./content/second.txt', 'utf-8')
console.log(first, second)
 
// dùng flg: tạo ra value thứ 2 trùng vs value đầu tiên -> tạo 2 dòng giống nhau
writeFileSync('./content/result-sync.text', `Here is the result : ${first}, ${second}`, {flag: 'a'});

console.log('done with this task');
console.log('starting the next one')