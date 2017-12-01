const path = require('path');

// basename() 方法返回一个 path 的最后一部分

// first.html
let basenameOne = path.basename("http://www.webxiaoma/blogs/first.html");
// first
let basenameTwo = path.basename("http://www.webxiaoma/blogs/first.html",'.html') 

console.log(`basenameOne: ${basenameOne}, basenameTwo: ${basenameTwo}`);


// delimiter 提供平台特定的路径分隔符：

// Windows 上是 ;
// POSIX 上是 :

let delimiter = path.delimiter;
console.log(process.env.PATH.split(delimiter)); // 返回一个数组


// dirname() 方法 返回一个目录

let URL='c:/web/xiao/ma/index.js';

// c:/web/xiao/ma
console.log(path.dirname(URL))


// extname() 方法 返回一个扩展名

console.log('1:'+path.extname('index.js')) // .js
console.log('1:'+path.extname('one.index.js')) // .js
console.log('2:'+path.extname('.js')) // ''
console.log('3:'+path.extname('index.')) // .
console.log('4:'+path.extname('index')) // ''
console.log('5:'+path.extname('.')) // ''
console.log('6:'+path.extname(''))  // ''


// format() 方法会从一个对象返回一个路径字符串。 与 path.parse() 相反。
// 如果提供了dir 则 root会被忽略
// 如果提供了base 则 name和ext会被忽略

let objOne = {
    dir:'C:\\web', 
    root:'\node', // 忽略       
    base:'\inde.js',
}
let objTwo = {
    root:'/node',
    base:'/home/user',
}
let objThree = {
    root:'/node',
    base:'/home/user',
    name:'/path', // 忽略
    ext:'/inde.js' // 忽略
}
let objFour = {
    root:'/node',
    name:'/path',
    ext:'/inde.js'
}
console.log(path.format(objOne)) // C:web\index.js
console.log(path.format(objTwo)) // /node/home/user
console.log(path.format(objThree)) // /node/home/user
console.log(path.format(objFour)) // /node/path/inde.js



// isAbsolute(path) 方法会判定 path 是否为一个绝对路径。

console.log(path.isAbsolute('C:\\web')) // true
console.log(path.isAbsolute('C:/web')) // true
console.log(path.isAbsolute('/web')) // true
console.log(path.isAbsolute('\\web')) // true
console.log(path.isAbsolute('C:\web')) // false
console.log(path.isAbsolute('\web')) // false
console.log(path.isAbsolute('web/xiaoma')) // false
console.log(path.isAbsolute('web\\xiaoma')) // false



// join([...paths]) 方法使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径。

let urlOne = path.join('/web','/xiao/ma', '../index.html')
let urlTwo = path.join('/web','/xiao/ma', './index.html')

// \web\xiao\index.html
console.log(urlOne)

// \web\xiaoma\ma\index.html
console.log(urlTwo)


// normalize(path) 方法会规范化给定的 path，并解析 '..' 和 '.' 片段。

// \web\xiao\ma
console.log(path.normalize('C:\\web\\xiao\\ma\\index\\..'))



// parse(path) 方法会规范化给定的 path，并解析 '..' 和 '.' 片段。

let urlThree = '/web/xiao/ma/index.js'

console.log(path.parse(urlThree))

// {
//     root:'/',
//     dir:'/web/xiao/ma',
//     base:'index.js',
//     ext:'.js',
//     name:'index'
// }





// relative(from,to) 方法返回从 from 到 to 的相对路径（基于当前工作目录）

// ../am/node/inde.js
console.log(path.relative('/web/xiao/ma','/web/xiao/am/node/inde.js'))

// ''
console.log(path.relative('/web/xiao/ma','/web/xiao/ma'))





// resolve([..paths])  方法会把一个路径或路径片段的序列解析为一个绝对路径。

console.log(path.resolve('/foo/bar', './baz'));
// 返回: '/foo/bar/baz'

console.log(path.resolve('/foo/bar', '/tmp/file/'));
// 返回: '/tmp/file'

console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));
// 如果当前工作目录为 /home/myself/node，
// 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'



// sep  提供了平台特定的路径片段分隔符：

// Windows 上是 \
// POSIX 上是 /




// path.win32 属性提供了 path 方法针对 Windows 的实现。