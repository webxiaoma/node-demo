/**
 * 客户端，netServer-one.js 是服务端
 */ 
const net = require('net');

let PORT = 3000;
let HOST = '127.0.0.1';

let client = net.createConnection(PORT,HOST);

client.on('connect',()=>{
    console.log(`客户端：已经与服务端建立链接`);
})

client.on('data',(data)=>{
    console.log(`客户端：收到服务端数据，内容为${data}`)
})

client.on('close',()=>{
    console.log('客户端：连接断开');
})

client.end('你好我是客户端的数据');