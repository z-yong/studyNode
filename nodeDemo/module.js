const counter = (arr) => {
    return "一共有" + arr.length + "个元素在数组中"
}
const add = (a,b) => {
    return `和为${a+b}`
}
const num = 6;
// module.exports.counter = counter;
// module.exports.add = add;
// module.exports.num = num;
module.exports = {
    counter, add, num
}
