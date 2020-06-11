//引入事件模块
const events = require('events');

// 创建EventEmitter对象
const myEmitter = new events.EventEmitter();

// 注册事件
myEmitter.on('myEvent', function(str){
    // console.log('注册事件',str, this)
    setImmediate(() =>{
        console.log('异步执行',str)
    })
})

// 触发事件
myEmitter.emit('myEvent', "我是事件参数")

console.log("异步操作的话,我虽然写在触发事件代码的下面 但我先执行")