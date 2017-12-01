
const fs = require('fs');
const assert = require('assert');
// const iconv = require('iconv-lite');


//*******  读取文件 *******

// 异步
fs.readFile('./test.txt',function(err,data){
	if(err){
		throw err;
	}
	// console.log(data)
    // console.log(data.toString())
})

//  同步
let SyncFile = fs.readFileSync( './test.txt','utf-8')

// console.log(SyncFile);



//*******  写入文件 *******

// fs.writeFile('./write.txt','test',err =>{
// 	if(err) throw err;
// 	console.log("写入成功");

// 	fs.readFile('./write.txt','utf-8',(err,data) =>{
// 		if(err) throw err;

// 		console.log('读取成功：'+ data);
// 	})
// })



/*

注意如果找不到文件会创建新文件
因为默认flag='w'是写，会清空文件，想要追加，可以传递一个flag参数，如下。
flag传值，r代表读取文件，w代表写文件，a代表追加。

*/


// fs.writeFile('./write.txt','add content',{'flag':'a'},(err)=>{
// 	if(err) throw err;
// 	console.log("追加成功");

//     fs.readFile('./write.txt','utf-8',(err,data) =>{
// 		if(err) throw err;

// 		console.log('读取成功：'+ data);
// 	})

// })



//  删除文件

// fs.unlink('./delete.txt',err=>{
//    assert.ifError(err);
//    console.log('以删除文件：delete.txt')
// })



// 追加文件内容 (保证delete.txt)

fs.appendFile('./add.txt','追加的内容','utf8',(err)=>{
   assert.ifError(err);
   console.log(fs.readFileSync('./add.txt','utf8')) 
})