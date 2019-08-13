const http = require('http')
const url = require('url')
const path = require("path")
const staticHandlers = require("./router/static");
const router = require("./router")

var staticExp = /\/public\/(img|css|js)\/[a-z]*\.(jpg|png|gif|css|js)/;

const server = () => http.createServer((req, res) => {
    console.log('server start in 9999')
    let pathname = url.parse(req.url).pathname;
    let method = req.method
    if (staticExp.test(pathname)) {// 静态文件请求交由static处理
        staticHandlers({ req, res, pathname })
    } else {
        router({ pathname, method, req, res });
    }

}).listen(9999)


server();