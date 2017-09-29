// 只能写一个 module.exports 否则最后一个会覆盖前面的
module.exports = () =>{
	return {
	  "text":"我是另一个模块three"
	};
};


// module.exports = () =>{
// 	return {
// 	  "other":"我是另一个模块"
// 	};
// };