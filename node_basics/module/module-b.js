
console.log("b 开始");

exports.done = false;

const a = require('./module-a.js');

console.log('在b中，a.done = ',a.done);

exports.done = true;

console.log('b 结束');
 