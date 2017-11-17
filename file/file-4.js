/*
文件操作事件


*/ 


const fs = require('fs');


// *******fs.FSWatcher 类*******

// 观察目录的变化
fs.watch('./watch',{encoding:'buffer'},(enentType,filename)=>{
	if(filename)
		console.log(filename);
})


// *******fs.WriteStream 类*******

