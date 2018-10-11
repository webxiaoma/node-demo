
const server = require('./server')
const router = require('./router')
const requireHandlers = require('./requireHandlers')

// 路由处理
let handlers = {};
handlers['/'] = requireHandlers.home
handlers['/updated'] = requireHandlers.updated
handlers['/catalogue'] = requireHandlers.catalogue

server.server(router.router,handlers)


