const express = require('express');

const app = express();

// 当用户访问根路径时
// app.get('/', (req, res) => {
//     console.log("客户端向服务器发送请求..." + req.url)
//         // res.send('This is index page') //纯文本
//     res.sendFile(__dirname + '/test2.html') //html页面
// })

// // 当用户访问/content路径时
// // 路由参数
// app.get('/content/:id', (req, res) => {
//     console.log("客户端向服务器发送请求..." + req.url)
//     console.log('路径参数为:', req.params.id)
//     res.send('This is content page')
// })

// 使用ejs模板引擎
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {title: '首页'})
})

app.get('/phone', (req, res) => {
    res.render('phone', {title: '电话'})
})

app.get('/ejsmodule', (req, res) => {
    const data = [
        { name: '小红', age: 16 },
        { name: '小白', age: 26 },
        { name: '小名', age: 18 }
    ]
    res.render('ejsmodule', { pageName: '模板引擎', data })
})

app.listen(8000)