
console.log("main 开始");

const a = require("./module-a.js");
const b = require("./module-b.js");

console.log(`a.done = ${a.done}, b.done = ${b.done}`);

// 结果
// main 开始
// a开始
// b开始
// 在b中，a.done = false
// b结束
// 在a中，b.done = true
// a结束
// a.done = true, b.done = true

