/**

author:webxiaoma
sites:http://www.webxiaoma.com

**/





      // ****************  Buffer.from(array) *******************

// 创建一个新的包含字符串 'buffer' 的 UTF-8 字节的 Buffer 
const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.log(buf);



     //********* Buffer.from(arrayBuffer[, byteOffset[, length]]) **********

const arr = new Uint16Array(2);

arr[0] = 5000;
arr[1] = 4000;

// 与 `arr` 共享内存
const buf2 = Buffer.from(arr.buffer);

// 输出: <Buffer 88 13 a0 0f>
console.log(buf2);

// 改变原始的 Uint16Array 也会改变 Buffer
arr[1] = 6000;

// 输出: <Buffer 88 13 70 17>
console.log(buf2);


const can = new ArrayBuffer(10);
const buf3 = Buffer.from(can,0,5);

//结果：<Buffer 00 00 00 00 00> 5
console.log(buf3,buf3.length)




     // ***************** Buffer.from(buffer) **********************

const buf4 = Buffer.from('webxiaoma');
const buf5 = Buffer.from(buf4);

buf4[0] = 0X61;

//输出 webxiaoma
console.log(buf4.toString()); 

//输出 aebxiaoma
console.log(buf5.toString()); 







     // ***************** Buffer.from(string[, encoding]) **********************

const bufSt1 = Buffer.from("小马") //默认utf8

//结果：小马
console.log(bufSt1.toString());

const bufSt2 = Buffer.from("小马","ucs2") //ucs2

//结果：自己打印查看
console.log(bufSt2.toString());

const bufSt3 = Buffer.from("小马","latin1") //latin1

//结果：自己打印查看
console.log(bufSt3.toString());