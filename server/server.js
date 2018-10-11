const http = require('http')
const url = require('url')


const server = (router,handlers)=>http.createServer((req,res)=>{
    let pathname = url.parse(req.url).pathname;
    let method = req.method
    router({pathname,method,req,handlers,res})
}).listen(9999)

console.log('server start in 9999')

exports.server = server