const fs = require('fs');
const path = require('path');
const http = require('http');

const port = 3000;
const filepath = path.join(__dirname,'example.txt');

const server = http.createServer((req,res) => {
    fs.readFile(filepath,'utf-8',(err,data) => {
        if(err){
            console.error('error in opening file',err);
            res.writeHead(500,{'content-type':'text/plain'})
            res.end('error in the server');
        }
        res.writeHead(200,{'content-type':'text/plain'});
        res.end(data);
    });

});

server.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}/`)
}
)