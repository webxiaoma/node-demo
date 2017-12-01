
const http = require('http');
const querystring = require('querystring');

http.createServer((req,res) => {
	console.log(req)
	
	
	var body = '';
	req.on('data',function(chunk){
       body += chunk;
	})
   req.on('end', function () {
    // 解析参数
    body = querystring.parse(body);
    // 设置响应头部信息及编码
    res.writeHead(200,{
		'constent-type':'text/json',
		'Access-Control-Allow-Methods':'POST',
		"Access-Control-Allow-Origin":"*"
	});
 
    res.write("您输入了："+body.data);
    res.end();
  });
}).listen(9999,() => {
   console.log("已经在运行在：9999端口")
})
