const formaidable  = require('formidable')
const util = require('util');
const fs = require('fs')
const {exec} = require('child_process')

exports.home = ({req,res,method})=>{
    res.writeHead(200,{
        "content-type":"text/html;charset=utf-8"
    })

    let body = `
         <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
        </head>
        <body>
            <form action="/updated" method="post" enctype="multipart/form-data">
                <p>
                   年龄：
                   <input type="text" name="age" value="年龄">
                </p>
                <p>
                    照片：
                    <input type="file" name="file" >
                </p>
                <input type="submit" value="提交">
            </form>
        </body>
        </html>
    `
    res.write(body)
    res.end()
}


// 处理上传文件
exports.updated = ({req,res,method})=>{
     let form = new formaidable.IncomingForm()
     form.parse(req,(err,data,files)=>{
        console.log(err,data,files) 
        let imgName = `/img/${Math.floor(Math.random()*100000)*10}`
        fs.renameSync(files.file.path,imgName)   
        res.writeHead(200,{
            "content-type":'text/html;charset=utf-8',
        })
        let json = ""
        res.write(`年龄：${data.age}\n`)
        res.write(`<img src="${imgName}"/>`)
        res.end()
     })
}

exports.catalogue = ({req,res,method})=>{
    exec("npm --version",(err,stdout,stderr)=>{
        console.log(err,stdout,stderr)
        res.writeHead(200,{
            "content-type":'text/plain',
        })
        res.write(stdout)
        res.end()
    })
}