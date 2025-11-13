const http = require('http');

const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req,res) =>{
    res.statusCode = 200;
    res.setHeader('content-type','text/plain');
    res.end('go Study');
})

server.listen(port,hostname,()=>{
    console.log(`server running on http://${hostname}:${port}/`);
})