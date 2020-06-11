// 定时器
// setTimeout(() =>{
//     console.log(__dirname) //不包含当前文件名的路径
//     console.log(__filename)//包含当前文件名的路径
// },3000)
// const stuff = require('./module');
// console.log(stuff.counter([1,2,3]))
// console.log(stuff.add(1,stuff.num))
const fs = require('fs');

// 异步删除文件 只能删除文件 无法删除文件夹 后面的回调函数必须要写 否则会报错
// fs.unlink('aa.js', () => {})

// 同步删除文件 只能删除文件 无法删除文件夹
// fs.unlinkSync('cc.txt')

// 异步创建文件夹
// fs.mkdir('aaa', () => {})
// 同步创建文件
// fs.mkdirSync('./aa/bb')

// 异步删除文件夹 如果文件夹下有文件或文件夹则无法删除 需要逐个删除
// fs.rmdir('aa', () => {})=
deleteall('./aaa')

function deleteall(path) {
    var files = [];
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach(function(file, index) {
                var curPath = path + "/" + file;
                if (fs.statSync(curPath).isDirectory()) { // 判断是否是文件夹 如果是 继续执行此方法
                    deleteall(curPath);
                } else { //如果是文件 则直接删除
                    fs.unlinkSync(curPath);
                }
            })
            // 当其内部删除干净了即可删除该文件夹
        fs.rmdirSync(path);
    }
}