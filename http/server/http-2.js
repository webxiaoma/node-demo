
const http = require('http');
const querystring = require('querystring');

http.createServer((req,res) => {	
	
	  var body = '';
	  req.on('data',function(chunk){
       body = chunk;
	  })
   req.on('end', function () {
    // 解析参数
    body = querystring.parse(body);
    // 设置响应头部信息及编码
    res.writeHead(200,{
      "Access-Control-Allow-Origin":'*',
  		'constent-type':'text/json',
  		'Access-Control-Allow-Methods':'POST',
	});
  
    res.write("您输入了：");
    res.end();
  });
}).listen(9998,() => {
   console.log("已经在运行在：9998端口")
})
