
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