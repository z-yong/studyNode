//引入事件模块
const events = require('events');

// 创建EventEmitter对象
const myEmitter = events.EventEmitter();

// 注册事件
myEmitter.on('myEvent', () =>{
    console.log('注册事件')
})
console.log(events)