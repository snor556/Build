const http = require('http');

const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');

    res.end('Hi nooob this is node.js');
})

server.listen(port,hostname,() =>{
    console.log(`the port is running http:/${hostname}:${port}/`);
})