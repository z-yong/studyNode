const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'nodemysql' //数据库名
});

// 连接数据库
db.connect(err => {
    if(err) throw err
    console.log('数据库已连接')
})

// 创建数据库(访问即创建)
app.get('/createDB', (req, res) => {
    const sql = "CREATE DATABASE nodemysql"; //sql语句 nodemysql是表名
    db.query(sql, (err, result) => {
        if(err) throw err
        console.log(result)
        res.send('nodemysql数据库已创建...')
    })
})

// 创建表(访问即创建)
app.get('/createTable', (req, res) => {//PRAMARY KEY(id) --> 设置其为主键
    const sql = "CREATE TABLE posts(id int AUTO_INCREMENT,title VARCHAR(255),body VARCHAR(255),PRIMARY KEY(id))";
    db.query(sql, (err, result) => {
        if(err) throw err;
        conosle.log(result);
        res.send("posts表已创建")
    })
})

//添加数据
app.get('/addposts1', (req, res) => {
    const post = { title: 'one', body: 'contentONE' };
    const sql = "INSERT INTO posts SET ?";
    db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send("已添加一条数据..")
    })
}) 

//查询所有数据
app.get('/getposts', (req, res) => {
    const sql = "SELECT * FROM posts";
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result) 
    })
}) 

// 根据条件查询数据
app.get('/getposts/:id', (req, res) => {
    const sql = "SELECT * FROM posts WHERE id = " + req.params.id;
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result) 
    })
})

// 修改某条数据中的某个字段
app.get('/updateposts/:id', (req, res) => {
    const newTitle = 'newOne';
    const sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('修改成功') 
    })
})

// 修改某条数据中的某些字段
app.get('/updatepostsall/:id', (req, res) => {
    const newData = {title: '改变', body: '整天数据变动'}
    const sql = `UPDATE posts SET title = '${newData.title}', body = '${newData.body}' WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('修改成功') 
    })
})

//删除某条数据
app.get('/deleteposts/:id', (req, res) => {
    const sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('删除成功') 
    })
})

//删除所有数据
app.get('/deleteposts', (req, res) => {
    const newTitle = 'newOne';
    const sql = `DELETE FROM posts`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('删除成功') 
    })
})

app.listen(3000, () => {
    console.log('服务器已启动, 端口: 3000')
})