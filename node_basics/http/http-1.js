const http = require('http');



//  创建一个简单的服务器

http.createServer((req,res) => {
	console.log("request start")
	res.writeHead(200,{
		'constent-type':'text/plain'
	});
	res.write("welcome node-http");
	res.end();
}).listen(9999)
console.log("已经运行在：9999端口")


// 上面是对下面的封装


// let server = new http.Server();
 
// server.on('request',(req,res) => {
// 	res.writeHead(200,{
// 		'constent-type':'text/plain'
// 	});
// 	res.write("welcome node-http");
// 	res.end();
// })

// server.listen(9999)

