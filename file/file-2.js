
/*
fs.read和fs.write功能类似fs.readFile和fs.writeFile()，但提供更底层的操作，实际应用中多用fs.readFile和fs.writeFile。

使用fs.read和fs.write读写文件需要使用fs.open打开文件和fs.close关闭文件。

*/ 


const fs = require('fs');
const assert = require('assert')



// ****  打开文件 *****

// fs.open('./open.txt','a+',(err,fd)=>{
//     if(err) throw err;
//     console.log("文件以打开");

//     let readBuffer = new Buffer.alloc(30);
//     let writeBuffer = new Buffer.from(" add content")
//     fs.write(fd,writeBuffer,0,writeBuffer.length,0,(err,bytesWritten,buffer)=>{
//         if(err) throw err;

//         console.log(`写入成功，写入的长度：${bytesWritten}, 写入的内容：${buffer}`);
 
//       	fs.read(fd,readBuffer,0,30,0,(err, bytesRead, buffer)=>{
// 	    	if(err) throw err;
// 	    	console.log(bytesRead)
// 	    	console.log(buffer.toString());

// 	    	// 关闭
// 	        fs.close(fd);

// 		 })
	     

//     })

   
// })




// 截取文件

let fd = fs.openSync('open.txt','r+');

fs.ftruncate(fd,5,(err)=>{
	assert.ifError(err);
	console.log("截取内容为：" +fs.readFileSync('open.txt','utf-8'));
})