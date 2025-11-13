const fs = require('fs');

let fileName = 'example.txt';
fs.writeFile(fileName,'go study',(err)=>{
    if(err){
        console.log('error')
    }
    else{
        console.log('file created')
    }
});

fs.appendFile(fileName,'\n this was added after exam',(err) =>{
     if(err){
        console.log('error')
    }
    else{
        console.log('file updated')
    }
})
fs.readFile(fileName,'utf-8',(err,data) => {
    if(err){
        console.log('error');
    }
    else{
        console.log('data',data);
    }
})