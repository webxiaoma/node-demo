const url = require('url');


let myUrl = url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');
console.log(myUrl)

// {
//     protocol: 'https',
//     slashes: 'true',
//     auth: 'user:pass',
//     host: 'sub.host.com:8080',
//     port: '8080',
//     hostname: 'sub.host.com',
//     hash: '#hash',
//     search: '?query=string',
//     pathnae: '/p/a/t/h',
//     path: '/p/a/t/h?query=string',
//     href: 'https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash'
// }



const {URL, URLSearchParams } = require('url')

const urlOne = new URL('http://www.webxiaoma.com?a=123&b=567');
console.log(urlOne.searchParams.get('a')) // 123

urlOne.searchParams.append('c','0987')
//http://www.webxiaoma.com?a=123&b=567&c=0987
console.log(urlOne.href);