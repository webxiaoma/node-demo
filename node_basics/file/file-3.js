
/*
目录的操作




*/ 



const fs = require('fs');


//  创建新目录 （如果文件已经存在将会报错）

// fs.mkdir('./newdir',function(err){
	
//     if(err) throw err
//     console.log("make dir success")
// })



// 删除目录 (目录不是空的将会报错)


// fs.rmdir('./delete_dir',function(err){
//    if(err) throw err;
//    console.log('delete dir success')

// })



//  读取目录

fs.readdir('./newdir',(err,files)=>{
	 if(err) throw err;
     // files 是一个数组
     console.log(Array.isArray(files))
	 console.log("读目录取成功："+ files);
})