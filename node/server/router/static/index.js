const fs = require("fs");
const path = require("path");

let MIME = {};

MIME[".css"] = "text/css;charset=utf-8";
MIME[".js"] = "text/js;charset=utf-8";
MIME[".jpg"] = "image/jpeg";
MIME[".jpeg"] = "image/jpeg";
MIME[".png"] = "image/png";
MIME[".gif"] = "image/gif";

let staticHandler = ({ req, res, pathname})=>{
   
    let extname = path.extname(pathname)
    let filePath = path.join(__dirname, '../../', pathname);

    if (fs.existsSync(filePath)){ // 文件存在
        res.writeHead(200, { 'Content-Type': MIME[extname] });
        let files = fs.readFileSync(filePath);
        res.end(files,"utf-8");// 二进制文件需要加上binary
    }else{ // 不存在
        res.writeHead(404, {
            "content-type": 'text/plain;charset=utf-8',
        });
        res.write("没有发现文件");
        res.end();
    }
}       

module.exports = staticHandler;