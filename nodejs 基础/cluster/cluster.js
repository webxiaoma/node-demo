
// https://www.cnblogs.com/mtl-key/p/6426171.html

const cluster = require('cluster');
const os = require('os');
const http = require('http');



/*

下面代码先判断当前进程是否为主进程（cluster.isMaster），如果是的，就按照CPU的核数，新建若干个worker进程；
如果不是，说明当前进程是worker进程，则在该进程启动一个服务器程序。
*/ 

if(cluster.isMaster){
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


cluster.on('listening',function(worker,address){
	console.log('listening: worker ' + worker.process.pid +', Address: '+address.address+":"+address.port);
})

// console.log(cluster.workers)
