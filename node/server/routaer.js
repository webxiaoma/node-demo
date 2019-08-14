
function router({pathname,method,handlers,req,res}){
    console.log(`require path is ${pathname}`)
   if(typeof handlers[pathname] === 'function'){
       handlers[pathname]({req,res,method})   
   }else{
        res.writeHead(404,{
            'constent-type':'text/plain'
        });
        res.write("no found page");
        res.end();

        console.log("server 404")  
   }
}

exports.router = router