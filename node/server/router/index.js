// const api = require("./api")

// let apiHandlers  = {};


// apiHandlers['/'] = api.home; // 首页
// apiHandlers['/about/about.html'] = api.aboutAbout; // 关于我们


// module.exports = ({ pathname, method, req,res }) =>{
//     if (apiHandlers[pathname]) {
//         apiHandlers[pathname]({ pathname, method, req, res })
//     } else {
//         res.writeHead(404, {
//             'constent-type': 'text/plain'
//         });
//         res.write("no found page");
//         res.end();
//         console.log("server 404")
//     }
// };



const api = require("./api")

let apiHandlers = {};


apiHandlers['/'] = api.home; // 首页
apiHandlers['/about/about.html'] = api.aboutAbout; // 关于我们


module.exports = ({ pathname, method, req, res }) => {
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