const fs = require("fs");
const path = require("path");


/**
 * @msg 首页路由 "/"
 */
exports.home = ({ pathname, method, req, res }) => {
    let extname = path.extname(pathname);
    let pathUrl = extname ? extname : (pathname + "index.html")
    let filePath = path.join(__dirname, '../../web', pathUrl);

    if (fs.existsSync(filePath)) { // 文件存在
        res.writeHead(200, { 'Content-Type': 'text/html' });
        let files = fs.readFileSync(filePath);
        res.end(files, "utf-8");// 二进制文件需要加上binary
    } else { // 不存在
        res.writeHead(404, {
            "content-type": 'text/plain;charset=utf-8',
        }); 
        res.write("没有发现文件");
        res.end();
    }
}

exports.aboutAbout = ({ pathname, method, req, res }) => {
    let extname = path.extname(pathname);
    let pathUrl = extname ? extname : (pathname + "index.html")
    let filePath = path.join(__dirname, '../../web', pathname);

    if (fs.existsSync(filePath)) { // 文件存在
        res.writeHead(200, { 'Content-Type': 'text/html' });
        let files = fs.readFileSync(filePath);
        res.end(files, "utf-8");// 二进制文件需要加上binary
    } else { // 不存在
        res.writeHead(404, {
            "content-type": 'text/plain;charset=utf-8',
        });
        res.write("没有发现文件");
        res.end();
    }
}