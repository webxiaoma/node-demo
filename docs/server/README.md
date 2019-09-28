---
sidebarDepth: 2
meta:
  - name: keywords
    content: node 服务器  node服务器 nodejs nodejs后台
  - name: description
    content: 本文主要是针对本仓库的一些说明，包括对前端插件，vue插件以及组件的一些简单介绍
---

# NodeJs服务器搭建

最近很长一段时间没有写博客了，今天抽出时间来搞一搞如何使用`nodejs`来搭建一个简单的服务器。

## 使用的模块

搭建`nodejs`我们需要使用一些常用的模块`http`模块和 `url`模块等，



## 入口文件

开始我们可以在入口文件可以很简单的编写一下，首先我们来看一下整个项目的目录;

```json
// 目录

-- index.js // 入口文件
```

接下来我们在`index.js`页面中开始编写代码

```js
const http = require('http')
const server = () => http.createServer((req, res) => {
    console.log("server start in 9998")
    res.writeHeader(200, { // 设置http状态码为200， 编码类型为urf-8
        'Content-Type': 'text/html;charset=utf-8'
    });
    res.write("<div>服务器已经在9998端口启动了</div>")
    res.end()
}).listen(9998)

server();
```

上面我们就完成了一个简单的`nodejs`服务器，是不是很简单😀？ 下面我们来加入路由


## 编写路由

现在我们在`router`目录中开始写点东西，我们想把把路由放到这里边；

我们在`router` 文件夹里的`index.js`中写一个方法来负责路由的分发跳转

```js
const api = require("./api") // 具体的路由处理（如返回页面或其他数据）下来分析

let apiHandlers = {}; // 存储路由信息

// 路由路径
apiHandlers['/'] = api.home; // 首页
apiHandlers['/about/about.html'] = api.aboutAbout; // 关于我们


module.exports = ({ pathname, method, req, res }) => { // 该函数用于分发路由
    if (apiHandlers[pathname]) {
        apiHandlers[pathname]({ pathname, method, req, res })
    } else {
        res.writeHead(404, { // 返回404
            'constent-type': 'text/plain'
        });
        res.write("no found page");
        res.end();
        console.log("server 404")
    }
};
```

在`api`文件夹下的`index.js`中我们会去写一些具体处理路由的逻辑（如返回该路由应的页面数据）

```js
const fs = require("fs");
const path = require("path");

/**
 * @msg 首页路由 "/"
 */
exports.home = ({ pathname, method, req, res }) => {
    let extname = path.extname(pathname); // 获取扩展名
    let pathUrl = extname? extname : (pathname + "index.html")
    let filePath = path.join(__dirname, '../../web', pathUrl); //拼接成web下的目录路径

    if (fs.existsSync(filePath)) { // 判断访问的页面对于的文件是否存在
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


/**
 * @msg 关于我们 "about/about.html"
 */

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
```

`web`目录里存放的就是我们的静态页面，我们会根据该目录下的目录解构来编写我们的路由，目前该目录解构为：


```
-- web
  -- index.html
  -- about
    -- about.html  
```

上面处理路由的方法我们会在入口文件`index.js`中去引入调用：

```js
const http = require('http')
const url = require('url')

const router = require("./router"); // 引入router

const server = () => http.createServer((req, res) => {
    console.log('server start in 9999')
    let pathname = url.parse(req.url).pathname; // 获取路径
    let method = req.method 
    router({ pathname, method, req, res }); // 调用路由 并传入响应的参数

}).listen(9999)
server();
```


## 图片资源处理

现在我们可以访问首页`htpp://localhost:9998/`和关于我们`htpp://localhost:9998/about/about.html`的页面（html页面）了，但是目前我们还不能访问图片类型的文件，`css`文件以及一些常见的文件, 下面我们来控制一下访问文件的类型。我们来修改一下入口页面`index.js`


```js
const http = require('http')
const url = require('url')

const staticHandlers = require("./router/static");
const router = require("./router");

var staticExp = /\/public\/(img|css|js)\/[a-z]*\.(jpg|png|gif|css|js)/; // 使用正则来限制访问文件类型

const server = () => http.createServer((req, res) => {
    console.log('server start in 9998')
    let pathname = url.parse(req.url).pathname;
    let method = req.method;
    if (staticExp.test(pathname)) {// 静态文件请求交由static处理
        staticHandlers({ req, res, pathname })
    } else {
        router({ pathname, method, req, res });
    }
}).listen(9998)

server();
```
