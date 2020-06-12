/*
 * cnpm init -yes
 * express框架 mongoose数据库 nodemailer发送邮件模块 body-parser处理数据中间件 dotenv使用环境变量
 * cnpm install express mongoose nodemailer body-parser dotenv -S
 */
const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

// 使用环境变量
require('dotenv').config();

const User = require('./model/user')

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

// 连接mongoDB数据库
mongoose.connect("mongodb://nodemailer:test1234@ds249137.mlab.com:49137/nodemailer-api1", 
                 { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('MongoDB Connect...')
        }).catch(err => { console.log(err) })

app.get('/', (req, res) => {
    res.send({state: '', msg: ''})
})

app.post('/addUser', (req, res) => {
    // res.setHeader('Content-Type', 'text/plain')
    // console.log(req.body)
    User.findOne({username: req.body.username}).then(user =>{
        console.log('user:',user)
        if(user){
            res.status(400).json({
                state: "fail",
                msg: '该用户已存在'
            })
        }else{
            const newUser = new User({
                username: req.body.username,
                password: req.body.password,
                email: req.body.email
            })
            newUser.save().then((data) =>{
                res.status(200).json({
                    state: 'success',
                    msg: '添加成功',
                    data
                })
            }).catch(err => { console.log(err) })
        }

    })
})

app.post('/findPwd',(req, res) => {
    User.findOne({username: req.body.username}).then((user) => {
        console.log(user)
        if(!user){
            res.status(400).json({
                state: 'fail',
                msg: '该用户不存在'
            })
        }else{
            // res.status(200).json({
            //     state: 'success',
            //     msg: '操作成功',
            //     data: user
            // })
            // 以下代码为发送到用户邮箱
            let transporter = nodemailer.createTransport({
                service: 'qq', //gmail,sina
                secure: true,
                auth: {
                    // 此处为发送者的邮箱,可以写明文, 若想不暴露 在qq邮箱中设置账号开启IMAP/SMTP服务
                    // 拿到授权码后新建.env文件 将邮箱及授权码放进去即可使用
                    // 此时只能开发环境使用, 若想上线使用 需将环境变量存进服务器中
                    user: process.env.EMAIL,
                    pass: process.env.PASSWORD
                }
            })
            let mailOptions = {
                from: '997610162@qq.com',
                to: user.email,
                subject: '找回密码',
                text: `您的用户名:${user.username}, 密码:${user.password}`
            }
            transporter.sendMail(mailOptions, (err, data) => {
                if(err){
                    res.status(400).json({
                        state: 'fail',
                        msg: err
                    })
                }else{
                    res.status(200).json({
                        state: 'success',
                        msg: `密码已发送至您的邮箱${user.email}`
                    })
                }
            })
        }
    })
})

app.listen(port, () => {
    console.log('服务器已启动, 端口: '+port)
})