// 定时器
// setTimeout(() =>{
//     console.log(__dirname) //不包含当前文件名的路径
//     console.log(__filename)//包含当前文件名的路径
// },3000)
const stuff = require('./module');
console.log(stuff.counter([1,2,3]))
console.log(stuff.add(1,stuff.num))