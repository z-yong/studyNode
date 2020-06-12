const mongoose = require('mongoose');
// 定义参数
const Schema = mongoose.Schema;

const userMess = new Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})
module.exports = mongoose.model('Users', userMess)