const fs = require('fs');
const http = require('http');

const server = http.createServer({}, (req, res) => {
    if (req.url === '/' || req.url === '/home') {
        res.writeHead(200, { "Content-type": "text/html;" });
        fs.createReadStream('./test.html').pipe(res)
    } else if (req.url === '/test2') {
        res.writeHead(200, { "Content-type": "text/html;" });
        fs.createReadStream('./test2.html').pipe(res)
    } else {
        res.writeHead(200, { "Content-type": "text/html;charset=utf-8;" });
        res.end('<h5>没有此页面哦~~</h5>')
    }
})
server.listen('3000', '127.0.0.1')