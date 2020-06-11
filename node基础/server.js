const http = require('http');

// 创建本地服务器
const server = http.createServer({}, (req, res) => {
    console.log("客户端向服务器发送请求..." + req.url)
        // 添加响应头部字段
        // res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8;' });
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8;' });
    res.end('我是纯文本111eea<br><p style="color:red;">我是html</p>')
        // console.log('req', req, 'res', res);
})

// 服务对象监听服务器地址以及端口号
server.listen('3000', '127.0.0.1')