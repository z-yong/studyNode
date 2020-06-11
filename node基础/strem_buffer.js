const fs = require('fs');
const http = require('http')

// 可读流
const myReadStrem = fs.createReadStream(__dirname + '/test.txt', 'utf8');
// 可写流
const myWriteStrem = fs.createWriteStream(__dirname + '/s/tt.txt') //此路径文件名可以不存在会自动创建 但文件夹名必须有
    //注册data事件(只能叫data) 读取流时触发
    //此外还有常用事件 open打开要读取文件事件 error文件读取发送错误事件 ready文件已就位等待读取事件 end文件读取完成事件
    // let index = 0;
    // let fileContent = '';
    // myReadStrem.on('data', chunk => {
    //     index++;
    //     console.log('================正在接受第 ' + index + ' 部分数据===============');
    //     // console.log(chunk);
    //     fileContent += chunk;
    //     if (index < 2) {
    //         // 将一部分数据写入s/tt.txt文件中
    //         myWriteStrem.write(chunk)
    //     }
    // })
    // myReadStrem.on('end', () => {
    //     console.log("利用缓冲器,将文件分成了 " + index + " 段进行接受段进行接收");
    // })

// 上面的写入文件的方法还有更简便的方式
// myReadStrem.pipe(myWriteStrem)

// 搭建服务器 利用pipe方法将文件内容输出到页面
const server = http.createServer({}, (req, res) => {
    // 如果req.url===/favicon.ico 则此次请求的是顶部图标
    if (req.url !== '/favicon.ico') { // 此时是页面的请求
        console.log("客户端向服务器发送请求..." + req.url)
            // res.writeHead(200, { 'Content-type': 'text/html;charset=utf-8;' });
            // const myReadStrem = fs.createReadStream(__dirname + '/test.html', 'utf8');
        res.writeHead(200, { 'Content-type': 'application/json' }); //json格式
        const myReadStrem = fs.createReadStream(__dirname + '/test.json', 'utf8');
        myReadStrem.pipe(res)
    }
})
server.listen('8000', '127.0.0.1')