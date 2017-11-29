
// https://www.cnblogs.com/mtl-key/p/6426171.html

const cluster = require('cluster');
const os = require('os');
const http = require('http');


if(cluster.isMaster){
	console.log(`主进程 ${process.pid} 正在运行`)
	for(var i=0,len=os.cpus().length;i<len;i++){
		cluster.fork();
	}
}else{
	http.createServer((req,res)=>{
       res.writhHead(200);
       res.end('hello world \n');
	}).listen(3335)

	console.log(`工作进程 ${process.pid} 已启动`)
}