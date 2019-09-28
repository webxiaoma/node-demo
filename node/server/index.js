const http = require('http')
const url = require('url')

const staticHandlers = require("./router/static");
const router = require("./router");

var staticExp = /\/public\/(img|css|js)\/[a-z]*\.(jpg|png|gif|css|js)/;

const server = () => http.createServer((req, res) => {
    console.log('server start in 9998')
    let pathname = url.parse(req.url).pathname;
    let method = req.method 
    if (staticExp.test(pathname)) {// 静态文件请求交由static处理
        staticHandlers({ req, res, pathname })
    } else {
        router({ pathname, method, req, res });
    }

}).listen(9998)


server();


// const http = require('http')
// const server = () => http.createServer((req, res) => { 
//     console.log(req)
//     console.log(res)
//     console.log("server start in 9998")
//     res.writeHeader(200, {
//         'Content-Type': 'text/html;charset=utf-8'
//     });
//     res.write("<div>服务器已经在9998端口启动了</div>")
//     res.end()
// }).listen(9998)

// server();