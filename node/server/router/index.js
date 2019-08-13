const api = require("./api")

let apiHandlers  = {};


apiHandlers['/'] = api.home; // 首页




module.exports = ({ pathname, method, req,res }) =>{
    if (apiHandlers[pathname]) {
        apiHandlers[pathname]({ pathname, method, req, res })
    } else {
        res.writeHead(404, {
            'constent-type': 'text/plain'
        });
        res.write("no found page");
        res.end();
        console.log("server 404")
    }
};