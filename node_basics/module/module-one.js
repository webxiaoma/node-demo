
const obj = require("./module-two.js");
console.log(obj.objOne.name); //module-one
console.log(obj.objTwo) //我是模块



const three = require("./module-three.js");
console.log(three()) // {"text":"我是另一个模块three"}