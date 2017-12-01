/**

author:webxiaoma
sites:http://webxiaoma.com/blogs/2017/09/20/node-buffer

练习主要包括:
	buf.write()
	buf.toString()
	buf.copy()
	buf.slice()
	Buffer.concat()


**/


    // *************buf.write()写入缓冲区**************
const buf = Buffer.allocUnsafe(256);

const writ = buf.write("webxiaoma",3,6);

// 6个字节
console.log(`${writ}个字节`);



   // *************buf.toString([encoding[, start[, end]]])读取缓冲区 buf.toJson**************

const bufRead = Buffer.allocUnsafe(26);

for(var i = 0; i < 26; i++){
  // 97 是 'a'的十进制ASCII值

  bufRead[i] = i + 97;
}

// a b c d e
console.log(bufRead.toString('utf8',0,4));


//buf.toJson 转化成json格式
const json = JSON.stringify(bufRead);

// {"type":"Buffer","data":[97,98,99,100,101,...,121,122]}
console.log(json);




      // ************* 拷贝Buffer(缓冲区) **************

//buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])

const bufCopy1 = Buffer.allocUnsafe(9).fill("webxiaoma");
const bufCopy2 = Buffer.allocUnsafe(11).fill("hello");

bufCopy1.copy(bufCopy2,5,3,9);

//hellxiaoma
console.log(bufCopy2.toString());




      // ************* 剪切Buffer(缓冲区) **************
//buf.slice([start[, end]]) 剪切Buffer

const bufSlice1 = Buffer.from("webxiaoma");
const bufSlice2 = bufSlice1.slice(3,9);

//webxiaoma
console.log(bufSlice1.toString());

//xiaoma
console.log(bufSlice2.toString()); 




      // ************* 合并Buffer(缓冲区) **************

// Buffer.concat(list[, totalLength]) 

const bufConcat1 = Buffer.from("web");
const bufConcat2 = Buffer.from("xiaoma");

const bufLength = bufConcat1.length + bufConcat2.length;

const bufCon = Buffer.concat([bufConcat1,bufConcat2],bufLength);

console.log(bufCon.length); //9

console.log(bufCon.toString()); // webxiaoma





     // ************* 合并Buffer(缓冲区) **************

// buf.compare(target[, targetStart[, targetEnd[, sourceStart[, sourceEnd]]]])


const bufCompare1 = Buffer.from("webxiaoma");

// 下面的buf和上面的做比较
const bufCompare2 = Buffer.from("web");
const bufCompare3 = Buffer.from("xiaoma");
const bufCompare4 = Buffer.from("webxiaoma");

//返回 0 相同
console.log( bufCompare1.compare(bufCompare4) ); 

// 返回 -1 bufCompare3排在bufCompare1后面
console.log( bufCompare1.compare(bufCompare3) );

// 返回 1 bufCompare2排在bufCompare1前面
console.log( bufCompare1.compare(bufCompare2) );



//带参数比较 bufCompare3 和 bufCompare1

  
//这里比较的是 bufCompare1中的xiao 和 bufCompare2中的xiao
// 返回 0 
console.log( bufCompare1.compare(bufCompare3,0,4,3,7) );