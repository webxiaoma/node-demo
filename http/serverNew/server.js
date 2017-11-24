
const http = require('http');
const fs = require('fs');
const url = require('url');

const config = {
	port: 9999,
}

http.createServer((req,res)=>{
  
  let pathName = url.parse(req.url).pathname;

  pathName == ""?"default":pathName

  fs.readFile(`www/${pathName}`,(err,data)=>{
      if(err){
      	 res.writeHead(404,{
      	 	'Content-type':'text/html'
      	 });
      }else{
      	res.writeHead(200,{
      		'Content-type':'text/html'
      	});

      	res.write(data.toString());
        res.end();

      }
  })


}).listen(config.port);

console.log(`Server running at http://127.0.0.1:${config.port} or localhost:${config.port}`)