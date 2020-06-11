// 引入文件系统模块
const fs = require('fs');
const path = require('path')

//同步读取当前路径下所有子文件名 不包括子文件夹下的文件
// const fileName = fs.readdirSync(path.resolve(__dirname));
const fileName = fs.readdirSync(__dirname);
// console.log(fileName)

//异步读取当前路径下所有子文件名 不包括子文件夹下的文件
fs.readdir(__dirname, (err, files) => {
    if(err) throw err;
    console.log(files)
})

// 同步写入文件
// 注意这里写入的文件如果存在 则文件内容会被替换 不是增加
// fs.writeFileSync(path.resolve(__dirname, './test.txt'), "123445")
fs.writeFileSync(path.resolve(__dirname, './test2.txt'), "123")

// 同步读取文件
// const content = fs.readFileSync(path.resolve(__dirname, './a','./r','./aa.txt'),'utf8');
// const content = fs.readFileSync(path.resolve(__dirname, './test.txt'),'utf8');
// const content = fs.readFileSync('./app.js','utf8');
// console.log(content)

// 异步读取文件
fs.readFile(path.resolve(__dirname, './test.txt'), 'utf8', (err, data) =>{
    if(err) throw err;
    console.log(data)
    // 异步写入文件
    // 注意这里写入的文件如果存在 则文件内容会被替换 不是增加
    fs.writeFile(path.resolve(__dirname, './test.txt'), "我是异步写入的方法", ()=>{})
})